import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HistoryService} from '../history.service';
import {Qualification} from '../Qualification';
import {QualificationEmployees} from '../QualificationEmployees';
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from "../not-found/not-found.component";
import {ConfirmableDeleteComponent} from "../confirmable-delete/confirmable-delete.component";
import {StatusBarComponent} from "../status-bar/status-bar.component";
import {QualificationService} from "../qualification.service";

@Component({
  selector: 'app-qualification-details',
  imports: [CommonModule, NotFoundComponent, ConfirmableDeleteComponent, StatusBarComponent, RouterModule],
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.scss'],
  standalone: true
})
export class QualificationDetailsComponent implements OnInit {
  skill = -1;
  qualification: Qualification | null | undefined;
  qualificationEmployees: QualificationEmployees | null | undefined;
  showSaveSuccess = false;
  failedMessage = '';
  failed = false;

  get found() {return this.qualification !== null}
  get loading() {return this.qualification === undefined}



  constructor(
    private route: ActivatedRoute,
    private qualificationService: QualificationService,
    private historyService: HistoryService
  ) {
    console.log(this)
  }

  /**
   * Initial fetch of qualification
   */
  ngOnInit(): void {
    this.getRequiredDataFromParams();
    this.fetchQualification(this.skill);
    if (this.found) {
      this.fetchQualificationEmployees(this.skill);
    }

  }

  /**
   * Goes back with the history service
   */
  goBack() {
    this.historyService.goBack();
  }

  /**
   * Deletes asynchronously a qualification
   */
  async deleteQualification() {
    if (this.qualification != undefined && (await this.isQualificationDeletable(this.qualification))) {
      await this.qualificationService.deleteQualification(this.qualification);
      this.goBack();
    }
  }

  /**
   * Checks asynchronously if a qualification is assigned to any employee (deletable)
   *
   * @param qualification - to check
   * @returns boolean if the qualification is deletable
   *
   */
  private async isQualificationDeletable(qualification: Qualification) {
    if (await this.qualificationService.isQualificationAssignedToAnyEmployee(qualification)) {
      this.failedMessage = 'Die Qualifikation ist noch Mitarbeiter:innen zugewiesen.';
      this.failed = true;
      return false;
    }
    return true;
  }

  /**
   * Resets the deletion error of the confirmable deletion dialog
   */
  resetDeletionError() {
    this.failed = false;
    this.failedMessage = '';
  }

  /**
   * Gets required data from url params
   */
  private getRequiredDataFromParams() {
    const routeParams = this.route.snapshot.paramMap;
    this.skill = Number(routeParams.get('id'));
    const routeQueries = this.route.snapshot.queryParamMap;
    if (routeQueries.has('saveSuccess')) {
      this.showSaveSuccess = routeQueries.get('saveSuccess') === 'true';
    }
  }

  /**
   * Fetches a certain qualification by its skill
   *
   * @param qualification_id - the skill to get
   */
  private fetchQualification(qualification_id: number) {
    this.qualificationService
      .getQualificationById(qualification_id)
      .then((qualification) =>
        this.qualification = qualification
      );
  }

  /**
   * Fetches QualificationEmployees with a certain skill
   *
   * @param qualification_id - to get the qualification employees
   */
  private fetchQualificationEmployees(qualification_id: number) {
    this.qualificationService.getQualificationEmployeesById(qualification_id).subscribe((qe) => {
      this.qualificationEmployees = qe || null;
    });
  }
}
