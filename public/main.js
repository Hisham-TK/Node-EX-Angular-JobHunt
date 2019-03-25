(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employer_search_em_operations_em_operations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employer/search/em-operations/em-operations.component */ "./src/app/employer/search/em-operations/em-operations.component.ts");
/* harmony import */ var _employer_search_em_profile_em_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employer/search/em-profile/em-profile.component */ "./src/app/employer/search/em-profile/em-profile.component.ts");
/* harmony import */ var _employer_dashboard_em_job_manager_em_job_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employer/dashboard/em-job-manager/em-job-manager.component */ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.ts");
/* harmony import */ var _employer_dashboard_em_db_profile_em_db_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employer/dashboard/em-db-profile/em-db-profile.component */ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.ts");
/* harmony import */ var _employer_dashboard_em_change_password_em_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employer/dashboard/em-change-password/em-change-password.component */ "./src/app/employer/dashboard/em-change-password/em-change-password.component.ts");
/* harmony import */ var _candidate_search_ca_operations_ca_operations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./candidate/search/ca-operations/ca-operations.component */ "./src/app/candidate/search/ca-operations/ca-operations.component.ts");
/* harmony import */ var _candidate_search_ca_profile_ca_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./candidate/search/ca-profile/ca-profile.component */ "./src/app/candidate/search/ca-profile/ca-profile.component.ts");
/* harmony import */ var _candidate_dashboard_ca_db_profile_ca_db_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./candidate/dashboard/ca-db-profile/ca-db-profile.component */ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.ts");
/* harmony import */ var _candidate_dashboard_ca_cv_cover_ca_cv_cover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./candidate/dashboard/ca-cv-cover/ca-cv-cover.component */ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.ts");
/* harmony import */ var _candidate_dashboard_ca_change_password_ca_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./candidate/dashboard/ca-change-password/ca-change-password.component */ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.ts");
/* harmony import */ var _candidate_dashboard_ca_applied_jobs_ca_applied_jobs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component */ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.ts");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./candidate/dashboard/candidate-dashboard/candidate-dashboard.component */ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.ts");
/* harmony import */ var _candidate_dashboard_ca_dashboard_ca_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./candidate/dashboard/ca-dashboard/ca-dashboard.component */ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.ts");
/* harmony import */ var _candidate_dashboard_ca_resume_ca_resume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./candidate/dashboard/ca-resume/ca-resume.component */ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.ts");
/* harmony import */ var _candidate_dashboard_ca_resume_new_ca_resume_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./candidate/dashboard/ca-resume-new/ca-resume-new.component */ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.ts");
/* harmony import */ var _job_search_jb_list_jb_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./job/search/jb-list/jb-list.component */ "./src/app/job/search/jb-list/jb-list.component.ts");
/* harmony import */ var _job_search_jb_grid_jb_grid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./job/search/jb-grid/jb-grid.component */ "./src/app/job/search/jb-grid/jb-grid.component.ts");
/* harmony import */ var _job_search_jb_single_jb_single_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./job/search/jb-single/jb-single.component */ "./src/app/job/search/jb-single/jb-single.component.ts");
/* harmony import */ var _job_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./job/create-job/create-job.component */ "./src/app/job/create-job/create-job.component.ts");
/* harmony import */ var _blog_bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blog/bl-list/bl-list.component */ "./src/app/blog/bl-list/bl-list.component.ts");
/* harmony import */ var _blog_bl_single_bl_single_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blog/bl-single/bl-single.component */ "./src/app/blog/bl-single/bl-single.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _others_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./others/about-us/about-us.component */ "./src/app/others/about-us/about-us.component.ts");
/* harmony import */ var _others_error_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./others/error/error.component */ "./src/app/others/error/error.component.ts");
/* harmony import */ var _others_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./others/contact-us/contact-us.component */ "./src/app/others/contact-us/contact-us.component.ts");
/* harmony import */ var _others_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./others/faq/faq.component */ "./src/app/others/faq/faq.component.ts");
/* harmony import */ var _others_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./others/how-it-works/how-it-works.component */ "./src/app/others/how-it-works/how-it-works.component.ts");
/* harmony import */ var _others_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./others/terms-and-conditions/terms-and-conditions.component */ "./src/app/others/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _employer_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./employer/main-component/main-component.component */ "./src/app/employer/main-component/main-component.component.ts");



// Employer





// Candidates


// Candidate Dashboard








// Jobs




// Blogs


// Others






// import {LoginComponent} from './others/login/login.component';
// import {RegisterComponent} from './others/register/register.component';

// auth




var routes = [
    // Employer
    {
        path: 'employers', component: _employer_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_34__["MainComponentComponent"], children: [
            { path: 'profile/:id', component: _employer_search_em_profile_em_profile_component__WEBPACK_IMPORTED_MODULE_4__["EmProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
            {
                path: 'dashboard/job-manager/:id', component: _employer_dashboard_em_job_manager_em_job_manager_component__WEBPACK_IMPORTED_MODULE_5__["EmJobManagerComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
            },
            {
                path: 'jobs/creatjob', component: _job_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_21__["CreateJobComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
            },
            {
                path: 'jobs/edit/:jobId', component: _job_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_21__["CreateJobComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
            },
            {
                path: 'dashboard/profile/:id', component: _employer_dashboard_em_db_profile_em_db_profile_component__WEBPACK_IMPORTED_MODULE_6__["EmDbProfileComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
            },
            {
                path: 'dashboard/change-password/:id', component: _employer_dashboard_em_change_password_em_change_password_component__WEBPACK_IMPORTED_MODULE_7__["EmChangePasswordComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
            }
        ], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]]
    },
    { path: 'profile/:id', component: _employer_search_em_profile_em_profile_component__WEBPACK_IMPORTED_MODULE_4__["EmProfileComponent"] },
    { path: 'employers/search', component: _employer_search_em_operations_em_operations_component__WEBPACK_IMPORTED_MODULE_3__["EmOperationsComponent"] },
    // {path: 'employers/profile/:id', component: EmProfileComponent,
    // canActivate: [AuthGuard]},
    // {path: 'employers/dashboard/job-manager', component: EmJobManagerComponent},
    // {path: 'employers/dashboard/post-new', component: EmPostNewComponent},
    // {path: 'employers/dashboard/profile/:id', component: EmDbProfileComponent,
    // canActivate: [AuthGuard]},
    // {path: 'employers/dashboard/change-password', component: EmChangePasswordComponent},
    // Candidates
    { path: 'candidates', component: _candidate_search_ca_operations_ca_operations_component__WEBPACK_IMPORTED_MODULE_8__["CaOperationsComponent"], pathMatch: 'full' },
    { path: 'candidates/:_id', component: _candidate_search_ca_profile_ca_profile_component__WEBPACK_IMPORTED_MODULE_9__["CaProfileComponent"] },
    // Candidate Dashboard
    {
        path: 'candidates/:_id/dashboard', component: _candidate_dashboard_candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["CandidateDashboardComponent"],
        children: [
            { path: '', component: _candidate_dashboard_ca_dashboard_ca_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["CaDashboardComponent"] },
            { path: 'profile', component: _candidate_dashboard_ca_db_profile_ca_db_profile_component__WEBPACK_IMPORTED_MODULE_10__["CaDbProfileComponent"] },
            { path: 'cv-cover', component: _candidate_dashboard_ca_cv_cover_ca_cv_cover_component__WEBPACK_IMPORTED_MODULE_11__["CaCvCoverComponent"] },
            { path: 'applied-jobs', component: _candidate_dashboard_ca_applied_jobs_ca_applied_jobs_component__WEBPACK_IMPORTED_MODULE_13__["CaAppliedJobsComponent"] },
            { path: 'change-password', component: _candidate_dashboard_ca_change_password_ca_change_password_component__WEBPACK_IMPORTED_MODULE_12__["CaChangePasswordComponent"] },
            { path: 'resume', component: _candidate_dashboard_ca_resume_ca_resume_component__WEBPACK_IMPORTED_MODULE_16__["CaResumeComponent"] },
            { path: 'new-resume', component: _candidate_dashboard_ca_resume_new_ca_resume_new_component__WEBPACK_IMPORTED_MODULE_17__["CaResumeNewComponent"] },
        ]
    },
    // Jobs
    { path: 'jobs/search/list', component: _job_search_jb_list_jb_list_component__WEBPACK_IMPORTED_MODULE_18__["JbListComponent"] },
    { path: 'jobs/search/grid', component: _job_search_jb_grid_jb_grid_component__WEBPACK_IMPORTED_MODULE_19__["JbGridComponent"] },
    { path: 'jobs/search/single/:jobId', component: _job_search_jb_single_jb_single_component__WEBPACK_IMPORTED_MODULE_20__["JbSingleComponent"] },
    // {path: 'jobs/creatjob', component: CreateJobComponent},
    // {path: 'jobs/creatjob/:jobId', component: CreateJobComponent},
    // Blog
    { path: 'blogs/list', component: _blog_bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_22__["BlListComponent"] },
    { path: 'blogs/single', component: _blog_bl_single_bl_single_component__WEBPACK_IMPORTED_MODULE_23__["BlSingleComponent"] },
    // Others
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"] },
    { path: 'about-us', component: _others_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__["AboutUsComponent"] },
    { path: 'error', component: _others_error_error_component__WEBPACK_IMPORTED_MODULE_26__["ErrorComponent"] },
    { path: 'contact-us', component: _others_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_27__["ContactUsComponent"] },
    { path: 'faq', component: _others_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__["FaqComponent"] },
    { path: 'how-it-works', component: _others_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_29__["HowItWorksComponent"] },
    // {path: 'login', component: LoginComponent},
    // {path: 'register', component: RegisterComponent},
    { path: 'terms-and-conditions', component: _others_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_30__["TermsAndConditionsComponent"] },
    // { path: '', component:},
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], pathMatch: 'full' },
    // {path: '**', redirectTo: '/error', pathMatch: 'full'},
    // auth
    { path: 'auth/login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"] },
    { path: 'auth/register/:id', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_31__["RegisterComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"theme-layout\" id=\"scrollup\">\n  <app-loading></app-loading>\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n\n<app-login-modal></app-login-modal>\n<app-register-modal></app-register-modal>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employer_employer_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employer/employer-filter.pipe */ "./src/app/employer/employer-filter.pipe.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/loading/loading.component */ "./src/app/layout/loading/loading.component.ts");
/* harmony import */ var _employer_search_em_operations_em_operations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employer/search/em-operations/em-operations.component */ "./src/app/employer/search/em-operations/em-operations.component.ts");
/* harmony import */ var _employer_search_em_profile_em_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employer/search/em-profile/em-profile.component */ "./src/app/employer/search/em-profile/em-profile.component.ts");
/* harmony import */ var _employer_dashboard_em_job_manager_em_job_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employer/dashboard/em-job-manager/em-job-manager.component */ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.ts");
/* harmony import */ var _employer_dashboard_em_post_new_em_post_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employer/dashboard/em-post-new/em-post-new.component */ "./src/app/employer/dashboard/em-post-new/em-post-new.component.ts");
/* harmony import */ var _employer_dashboard_em_db_profile_em_db_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employer/dashboard/em-db-profile/em-db-profile.component */ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.ts");
/* harmony import */ var _employer_dashboard_em_change_password_em_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./employer/dashboard/em-change-password/em-change-password.component */ "./src/app/employer/dashboard/em-change-password/em-change-password.component.ts");
/* harmony import */ var _candidate_search_ca_operations_ca_operations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./candidate/search/ca-operations/ca-operations.component */ "./src/app/candidate/search/ca-operations/ca-operations.component.ts");
/* harmony import */ var _candidate_search_ca_profile_ca_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./candidate/search/ca-profile/ca-profile.component */ "./src/app/candidate/search/ca-profile/ca-profile.component.ts");
/* harmony import */ var _candidate_dashboard_ca_dashboard_ca_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./candidate/dashboard/ca-dashboard/ca-dashboard.component */ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.ts");
/* harmony import */ var _candidate_dashboard_ca_db_profile_ca_db_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./candidate/dashboard/ca-db-profile/ca-db-profile.component */ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.ts");
/* harmony import */ var _candidate_dashboard_ca_resume_ca_resume_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./candidate/dashboard/ca-resume/ca-resume.component */ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.ts");
/* harmony import */ var _candidate_dashboard_ca_cv_cover_ca_cv_cover_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./candidate/dashboard/ca-cv-cover/ca-cv-cover.component */ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.ts");
/* harmony import */ var _candidate_dashboard_ca_change_password_ca_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./candidate/dashboard/ca-change-password/ca-change-password.component */ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.ts");
/* harmony import */ var _candidate_dashboard_ca_applied_jobs_ca_applied_jobs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component */ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.ts");
/* harmony import */ var _candidate_dashboard_ca_resume_new_ca_resume_new_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./candidate/dashboard/ca-resume-new/ca-resume-new.component */ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.ts");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./candidate/dashboard/candidate-dashboard/candidate-dashboard.component */ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.ts");
/* harmony import */ var _job_search_jb_list_jb_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./job/search/jb-list/jb-list.component */ "./src/app/job/search/jb-list/jb-list.component.ts");
/* harmony import */ var _job_search_jb_grid_jb_grid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./job/search/jb-grid/jb-grid.component */ "./src/app/job/search/jb-grid/jb-grid.component.ts");
/* harmony import */ var _job_search_jb_single_jb_single_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./job/search/jb-single/jb-single.component */ "./src/app/job/search/jb-single/jb-single.component.ts");
/* harmony import */ var _blog_bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blog/bl-list/bl-list.component */ "./src/app/blog/bl-list/bl-list.component.ts");
/* harmony import */ var _blog_bl_single_bl_single_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blog/bl-single/bl-single.component */ "./src/app/blog/bl-single/bl-single.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _others_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./others/about-us/about-us.component */ "./src/app/others/about-us/about-us.component.ts");
/* harmony import */ var _others_error_error_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./others/error/error.component */ "./src/app/others/error/error.component.ts");
/* harmony import */ var _others_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./others/contact-us/contact-us.component */ "./src/app/others/contact-us/contact-us.component.ts");
/* harmony import */ var _others_faq_faq_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./others/faq/faq.component */ "./src/app/others/faq/faq.component.ts");
/* harmony import */ var _others_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./others/how-it-works/how-it-works.component */ "./src/app/others/how-it-works/how-it-works.component.ts");
/* harmony import */ var _others_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./others/terms-and-conditions/terms-and-conditions.component */ "./src/app/others/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _layout_popup_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./layout/popup/login-modal/login-modal.component */ "./src/app/layout/popup/login-modal/login-modal.component.ts");
/* harmony import */ var _layout_popup_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./layout/popup/register-modal/register-modal.component */ "./src/app/layout/popup/register-modal/register-modal.component.ts");
/* harmony import */ var _job_filter_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./job/filter.pipe */ "./src/app/job/filter.pipe.ts");
/* harmony import */ var _job_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./job/create-job/create-job.component */ "./src/app/job/create-job/create-job.component.ts");
/* harmony import */ var _employer_employer_locationfilter_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./employer/employer-locationfilter.pipe */ "./src/app/employer/employer-locationfilter.pipe.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./auth/token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");
/* harmony import */ var _employer_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./employer/main-component/main-component.component */ "./src/app/employer/main-component/main-component.component.ts");









// Layout



// Employers






// Candidates


// Candidate dashboard








// import { PopUpComponent } from './candidate/dashboard/pop-up/pop-up.component';
// Jobs



// Blog


// Others






// import {LoginComponent} from './others/login/login.component';
// import {RegisterComponent} from './others/register/register.component';

// Modal





// auth


// services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _employer_employer_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["EmployerFilterPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                // auth
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_46__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_45__["RegisterComponent"],
                // LoginComponent,
                // RegisterComponent,
                // Layout
                _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                // Employer
                _employer_search_em_operations_em_operations_component__WEBPACK_IMPORTED_MODULE_12__["EmOperationsComponent"],
                _employer_search_em_profile_em_profile_component__WEBPACK_IMPORTED_MODULE_13__["EmProfileComponent"],
                _employer_dashboard_em_job_manager_em_job_manager_component__WEBPACK_IMPORTED_MODULE_14__["EmJobManagerComponent"],
                _employer_dashboard_em_post_new_em_post_new_component__WEBPACK_IMPORTED_MODULE_15__["EmPostNewComponent"],
                _employer_dashboard_em_db_profile_em_db_profile_component__WEBPACK_IMPORTED_MODULE_16__["EmDbProfileComponent"],
                _employer_dashboard_em_change_password_em_change_password_component__WEBPACK_IMPORTED_MODULE_17__["EmChangePasswordComponent"],
                // Candidates
                _candidate_search_ca_operations_ca_operations_component__WEBPACK_IMPORTED_MODULE_18__["CaOperationsComponent"],
                _candidate_search_ca_profile_ca_profile_component__WEBPACK_IMPORTED_MODULE_19__["CaProfileComponent"],
                _candidate_dashboard_ca_db_profile_ca_db_profile_component__WEBPACK_IMPORTED_MODULE_21__["CaDbProfileComponent"],
                _candidate_dashboard_ca_cv_cover_ca_cv_cover_component__WEBPACK_IMPORTED_MODULE_23__["CaCvCoverComponent"],
                _candidate_dashboard_ca_applied_jobs_ca_applied_jobs_component__WEBPACK_IMPORTED_MODULE_25__["CaAppliedJobsComponent"],
                _candidate_dashboard_ca_change_password_ca_change_password_component__WEBPACK_IMPORTED_MODULE_24__["CaChangePasswordComponent"],
                _candidate_dashboard_candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["CandidateDashboardComponent"],
                _candidate_dashboard_ca_dashboard_ca_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["CaDashboardComponent"],
                _candidate_dashboard_ca_resume_ca_resume_component__WEBPACK_IMPORTED_MODULE_22__["CaResumeComponent"],
                _candidate_dashboard_ca_resume_new_ca_resume_new_component__WEBPACK_IMPORTED_MODULE_26__["CaResumeNewComponent"],
                // Blog
                _blog_bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_31__["BlListComponent"],
                _blog_bl_single_bl_single_component__WEBPACK_IMPORTED_MODULE_32__["BlSingleComponent"],
                // Jobs
                _job_search_jb_list_jb_list_component__WEBPACK_IMPORTED_MODULE_28__["JbListComponent"],
                _job_search_jb_grid_jb_grid_component__WEBPACK_IMPORTED_MODULE_29__["JbGridComponent"],
                _job_search_jb_single_jb_single_component__WEBPACK_IMPORTED_MODULE_30__["JbSingleComponent"],
                // others
                _home_home_component__WEBPACK_IMPORTED_MODULE_33__["HomeComponent"],
                _others_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_34__["AboutUsComponent"],
                _others_error_error_component__WEBPACK_IMPORTED_MODULE_35__["ErrorComponent"],
                _others_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_36__["ContactUsComponent"],
                _others_faq_faq_component__WEBPACK_IMPORTED_MODULE_37__["FaqComponent"],
                _others_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_38__["HowItWorksComponent"],
                _others_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_39__["TermsAndConditionsComponent"],
                _layout_popup_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_40__["LoginModalComponent"],
                _layout_popup_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_41__["RegisterModalComponent"],
                _job_filter_pipe__WEBPACK_IMPORTED_MODULE_42__["FilterPipe"],
                _job_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_43__["CreateJobComponent"],
                _employer_employer_locationfilter_pipe__WEBPACK_IMPORTED_MODULE_44__["EmployerLocationfilterPipe"],
                _employer_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_50__["MainComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_47__["AuthService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_48__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_49__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            console.log(this.authService.loggedIn());
            this.router.navigate(['/auth/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.err = 'user name or password is incorrect';
        this._url = 'http://localhost:3000/users/';
    }
    AuthService.prototype.registerUser = function (user) {
        this.userType = user.userType;
        // console.log(this.userType);
        return this.http.post(this._url + 'register', user);
    };
    AuthService.prototype.loginUser = function (user) {
        var _this = this;
        this.http.post(this._url + 'login', user).subscribe(function (res) { return _this.userType = res.userType; });
        return this.http.post(this._url + 'login', user);
    };
    AuthService.prototype.loggedIn = function () {
        // console.log(localStorage.getItem('token'));
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        // console.log(localStorage.getItem('token'));
        return localStorage.getItem('token');
    };
    AuthService.prototype.Logout = function () {
        this.router.navigate(['/auth/login']);
        localStorage.removeItem('token');
        localStorage.removeItem('accountId');
        localStorage.removeItem('_id');
    };
    AuthService.prototype.isCandidate = function () {
        // console.log(this.userType);
        return this.userType;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <section class=\"overlape mb-5\">\n      <div class=\"block no-padding\">\n        <div data-velocity=\"-.1\" style=\"background: url(\n          assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n         class=\"parallax scrolly-invisible no-parallax\"></div>\n         <div class=\"container fluid\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"inner-header\">\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n<div class=\"container\" style=\"height: 526px ;width:500px\">\n  <h4 class=\"card-title  text-center\">Login</h4>\n  <form (ngSubmit)=\"userLogin(loginfrm)\" #loginfrm=\"ngForm\">\n      <div *ngIf=\"error\"class=\"alert alert-danger\" role=\"alert\">\n         {{error}}\n        </div>\n    <div class=\"form-group input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n     </div>\n        <input  [(ngModel)]=\"userData.email\" #email=\"ngModel\"  [class.is-invalid]=\"email.invalid && email.touched\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" type=\"email\" required>\n    </div>\n    <div *ngIf=\"email.invalid && email.touched\"  class=\"alert alert-danger\">\n        <div *ngIf=\"email?.errors.required\">\n          Email is required.\n      </div>\n    </div>\n     <!-- form-group// -->\n\n    <div class=\"form-group input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n    </div >\n        <input [(ngModel)]=\"userData.password\"  required #pass=\"ngModel\"  [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" placeholder=\"password\" type=\"password\" name=\"password\">\n    </div> <!-- form-group// -->\n    <div *ngIf=\"pass.invalid && pass.touched\"  class=\"alert alert-danger\">\n        <div *ngIf=\"pass?.errors.required\">\n          Password is required.\n      </div>\n    </div>\n    <div class=\"form-group m-auto \" style=\"width: 150px;\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\"> Login </button>\n         </div> <!-- form-group// -->\n\n</form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userData = {
            userType: 0,
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.auth.loginUser(this.userData).subscribe(function (res) {
            _this.result = res;
            console.log(_this.result);
            localStorage.setItem('token', res.token);
            localStorage.setItem('accountId', res.accountId);
            // if (res.userType != false) {
            if (res.userType) {
                // console.log(localStorage.getItem('token'));
                _this.router.navigate(['/employers/profile', res.accountId]);
                // }
            }
            else {
                // console.log(localStorage.getItem('token'));
                localStorage.setItem('_id', res._id);
                _this.router.navigate(['candidates', res._id, 'dashboard']);
            }
        }, function (err) { return console.log(err); });
        if (this.result === undefined) {
            this.error = 'Email or password is incorrect';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <section class=\"overlape\">\n        <div class=\"block no-padding\">\n          <div data-velocity=\"-.1\" style=\"background: url(\n            assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n           class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n          <div class=\"container fluid\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"inner-header\">\n                  <h3>Welcome Tera Planer</h3>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n<div class=\"container\" >\n    <h4 class=\"card-title mt-3 text-center\">Create Account</h4>\n    <form>\n        <ng-container *ngIf=\"id\">\n\n                <h4 class=\"lead mt-3 text-center\">HR</h4>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                     </div >\n                        <input [(ngModel)]=\"userData.hr.name.first\" name=\"first\" class=\"form-control mr-2\" placeholder=\"First name\" type=\"text\" required>\n                        <input [(ngModel)]=\"userData.hr.name.middle\"  name=\"middle\" class=\"form-control mr-2\" placeholder=\"Middle name\" type=\"text\" required>\n                        <input [(ngModel)]=\"userData.hr.name.last\" name=\"last\" class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n                    </div> <!-- form-group// -->\n\n                    <div class=\"form-group input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n                     </div>\n                        <input [(ngModel)]=\"userData.hr.mobile\" name=\"mobile\" class=\"form-control\" placeholder=\"phone\" type=\"tel\" required>\n                    </div> <!-- form-group// -->\n\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                       </div>\n                          <input [(ngModel)]=\"userData.email\"  name=\"email\" class=\"form-control\" placeholder=\"email\" type=\"email\" required>\n                      </div> <!-- form-group// -->\n\n\n                    <div class=\"form-group input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                        <input [(ngModel)]=\"userData.password\" class=\"form-control\" placeholder=\"Create password\" type=\"password\" name=\"password\" required>\n                    </div> <!-- form-group// -->\n                    <div class=\"form-group input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                        <input class=\"form-control\" placeholder=\"Repeat password\" type=\"password\" required>\n                    </div> <!-- form-group// -->\n                    <h4 class=\"lead mt-3 text-center\">Manager</h4>\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                         </div >\n                            <input [(ngModel)]=\"userData.manager.name.first\" name=\"first\" class=\"form-control mr-2\" placeholder=\"First name\" type=\"text\" required>\n                            <input [(ngModel)]=\"userData.manager.name.middle\"  name=\"middle\" class=\"form-control mr-2\" placeholder=\"Middle name\" type=\"text\" required>\n                            <input [(ngModel)]=\"userData.manager.name.last\" name=\"last\" class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n                        </div> <!-- form-group// -->\n\n                        <div class=\"form-group input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n                         </div>\n                            <input [(ngModel)]=\"userData.manager.mobile\" name=\"mobile\" class=\"form-control\" placeholder=\"phone\" type=\"tel\" required>\n                        </div> <!-- form-group// -->\n\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                           </div>\n                              <input [(ngModel)]=\"userData.manager.email\"  name=\"email\" class=\"form-control\" placeholder=\"email\" type=\"email\" required>\n                          </div> <!-- form-group// -->\n\n                          <div class=\"form-group input-group\">\n                              <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                             </div>\n                                <input [(ngModel)]=\"userData.manager.nationalId\"  name=\"nationalId\" class=\"form-control\" placeholder=\"National ID\" type=\"text\" required>\n                            </div> <!-- form-group// -->\n                            <h4 class=\"lead mt-3 text-center\">Employer</h4>\n                            <div class=\"form-group input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                                 </div >\n                                    <input [(ngModel)]=\"userData.employer.name.first\" name=\"first\" class=\"form-control mr-2\" placeholder=\"First name\" type=\"text\" required>\n                                    <input [(ngModel)]=\"userData.employer.name.middle\"  name=\"middle\" class=\"form-control mr-2\" placeholder=\"Middle name\" type=\"text\" required>\n                                    <input [(ngModel)]=\"userData.employer.name.last\" name=\"last\" class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n                                </div> <!-- form-group// -->\n\n                                <div class=\"form-group input-group\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n                                 </div>\n                                    <input [(ngModel)]=\"userData.employer.phoneNumber\" name=\"phoneNumber\" class=\"form-control\" placeholder=\"phone\" type=\"tel\" required>\n                                </div> <!-- form-group// -->\n\n                                <div class=\"form-group input-group\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                                   </div>\n                                      <input [(ngModel)]=\"userData.employer.email\"  name=\"email\" class=\"form-control\" placeholder=\"email\" type=\"email\" required>\n                                  </div> <!-- form-group// -->\n          </ng-container>\n          <ng-container *ngIf=\"! id\">\n            <!-- </div>  form-group// -->\n            <div class=\"form-group input-group\">\n              <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n               </div >\n                  <input [(ngModel)]=\"userData.information.name.first\" name=\"first\" class=\"form-control mr-2\" placeholder=\"First name\" type=\"text\" required>\n                  <input [(ngModel)]=\"userData.information.name.middle\"  name=\"middle\" class=\"form-control mr-2\" placeholder=\"Middle name\" type=\"text\" required>\n                  <input [(ngModel)]=\"userData.information.name.last\" name=\"last\" class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n              </div>\n            <div class=\"form-group input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n             </div>\n                <input [(ngModel)]=\"userData.information.email\" [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" type=\"email\" required>\n            </div> <!-- form-group// -->\n            <div class=\"form-group input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n            </div>\n              <input [(ngModel)]=\"userData.information.mobile\" name=\"mobile\" class=\"form-control\" placeholder=\"Phone number\" type=\"text\" required>\n            </div> <!-- form-group// -->\n\n            <div class=\"form-group input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n            </div>\n                <input [(ngModel)]=\"userData.password\" class=\"form-control\" placeholder=\"Create password\" type=\"password\" name=\"password\" required>\n            </div> <!-- form-group// -->\n            <div class=\"form-group input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n            </div>\n                <input class=\"form-control\" placeholder=\"Repeat password\" type=\"password\" required>\n            </div> <!-- form-group// -->\n          </ng-container>\n      <div class=\"form-group\">\n          <button type=\"submit\" (click)=\"userRegister()\" class=\"btn btn-primary btn-block\"> Create Account  </button>\n      </div> <!-- form-group// -->\n      <p class=\"text-center\">Have an account? <a href=\"\">Log In</a> </p>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../candidate/dashboard/candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, activateRoute, router, _ser) {
        this.auth = auth;
        this.activateRoute = activateRoute;
        this.router = router;
        this._ser = _ser;
        this.userData = {
            information: { name: {} },
            hr: { name: {} },
            manager: { name: {} },
            employer: { name: {} },
            userType: false
        };
        this.id = false;
        this.candidateData = this._ser.candidateData;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (data) {
            if (data['id'] === '0') {
                _this.id = false;
            }
            else if (data['id'] === '1') {
                _this.id = true;
            }
        });
        console.log(this.id);
    };
    RegisterComponent.prototype.userRegister = function () {
        var _this = this;
        this.userData.userType = this.id;
        // console.log(this.userData);
        this.auth.registerUser(this.userData).subscribe(function (res) {
            if (res.userType) {
                _this.router.navigate(['/employers/profile', res.accountId]);
            }
            else {
                _this.router.navigate(['candidates', res._id, 'dashboard']);
            }
            // console.log({...this.candidateData, ...res}, ' register res');
            localStorage.setItem('token', res.token);
            localStorage.setItem('accountId', res.accountId);
            localStorage.setItem('_id', res._id);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _candidate_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CandidateDashboardService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/token-interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/token-interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        });
        // console.log('Intercepted HTTP call', localStorage.getItem('token'));
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/blog/bl-list/bl-list.component.css":
/*!****************************************************!*\
  !*** ./src/app/blog/bl-list/bl-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmwtbGlzdC9ibC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/blog/bl-list/bl-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blog/bl-list/bl-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n     class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Blog</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-9 column\">\n          <div class=\"bloglist-sec\">\n            <div class=\"blogpost\">\n              <div class=\"blog-posthumb\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/blog1.jpg\" alt=\"\" /></a> </div>\n              <div class=\"blog-postdetail\">\n                <ul class=\"post-metas\">\n                  <li><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>November 23, 2017</a></li>\n                  <li><a class=\"metascomment\" href=\"#\" title=\"\"><i class=\"la la-comments\"></i>4 comments</a></li>\n                </ul>\n                <h3><a href=\"#\" title=\"\">11 Tips to Help You Get New Clients Through Cold Calling</a></h3>\n                <p>Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall\n                  Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing\n                  licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket.\n                  Spent a weekend importing banjos in West Palm Beach, FL.</p>\n                <a class=\"bbutton\" href=\"#\" title=\"\">Read More</a>\n              </div>\n            </div><!-- Blog Post -->\n            <div class=\"blogpost\">\n              <div class=\"blog-posthumb\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/blog2.jpg\" alt=\"\" /></a> </div>\n              <div class=\"blog-postdetail\">\n                <ul class=\"post-metas\">\n                  <li><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>November 23, 2017</a></li>\n                  <li><a class=\"metascomment\" href=\"#\" title=\"\"><i class=\"la la-comments\"></i>4 comments</a></li>\n                </ul>\n                <h3><a href=\"#\" title=\"\">New York is Leading</a></h3>\n                <p>Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall\n                  Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing\n                  licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket.\n                  Spent a weekend importing banjos in West Palm Beach, FL.</p>\n                <a class=\"bbutton\" href=\"#\" title=\"\">Read More</a>\n              </div>\n            </div><!-- Blog Post -->\n            <div class=\"blogpost\">\n              <div class=\"blog-posthumb\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/blog3.jpg\" alt=\"\" /></a> </div>\n              <div class=\"blog-postdetail\">\n                <ul class=\"post-metas\">\n                  <li><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>November 23, 2017</a></li>\n                  <li><a class=\"metascomment\" href=\"#\" title=\"\"><i class=\"la la-comments\"></i>4 comments</a></li>\n                </ul>\n                <h3><a href=\"#\" title=\"\">The Best (and Worst) Canadian Merchant Account Providers</a></h3>\n                <p>Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall\n                  Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing\n                  licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket.\n                  Spent a weekend importing banjos in West Palm Beach, FL.</p>\n                <a class=\"bbutton\" href=\"#\" title=\"\">Read More</a>\n              </div>\n            </div><!-- Blog Post -->\n            <div class=\"pagination\">\n              <ul>\n                <li class=\"prev\"><a href=\"#\"><i class=\"la la-long-arrow-left\"></i> Prev</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li class=\"active\"><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><span class=\"delimeter\">...</span></li>\n                <li><a href=\"#\">14</a></li>\n                <li class=\"next\"><a href=\"#\">Next <i class=\"la la-long-arrow-right\"></i></a></li>\n              </ul>\n            </div><!-- Pagination -->\n          </div>\n        </div>\n        <aside class=\"col-lg-3 column\">\n          <div class=\"widget\">\n            <div class=\"search_widget_job no-margin\">\n              <div class=\"field_w_search\">\n                <input placeholder=\"Search Keywords\" type=\"text\">\n                <i class=\"la la-search\"></i>\n              </div><!-- Search Widget -->\n            </div>\n          </div>\n          <div class=\"widget\">\n            <h3>Categories</h3>\n            <div class=\"sidebar-links\">\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Education</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Information</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Jobs</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Learn</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Skill</a>\n            </div>\n          </div>\n          <div class=\"widget\">\n            <h3>Recent Posts</h3>\n            <div class=\"post_widget\">\n              <div class=\"mini-blog\">\n                <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb1.jpg\" alt=\"\" /></a></span>\n                <div class=\"mb-info\">\n                  <h3><a href=\"#\" title=\"\">Canada adds 12,500 jobs in modest July rebound</a></h3>\n                  <span>October 25, 2017</span>\n                </div>\n              </div>\n              <div class=\"mini-blog\">\n                <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb2.jpg\" alt=\"\" /></a></span>\n                <div class=\"mb-info\">\n                  <h3><a href=\"#\" title=\"\">How to “Woo” a Recruiter and Land Your Dream Job</a></h3>\n                  <span>October 25, 2017</span>\n                </div>\n              </div>\n              <div class=\"mini-blog\">\n                <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb3.jpg\" alt=\"\" /></a></span>\n                <div class=\"mb-info\">\n                  <h3><a href=\"#\" title=\"\">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h3>\n                  <span>October 25, 2017</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"widget\">\n            <h3>Archives</h3>\n            <div class=\"sidebar-links\">\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>April 2017</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>March 2016</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>February 2015</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>July 2013</a>\n            </div>\n          </div>\n          <div class=\"widget\">\n            <h3>Meta</h3>\n            <div class=\"sidebar-links\">\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Log in</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Entries RSS</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Comments RSS</a>\n              <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>WordPress.org</a>\n            </div>\n          </div>\n          <div class=\"widget\">\n            <h3>Tags</h3>\n            <div class=\"tags_widget\">\n              <a href=\"#\" title=\"\">Adwords</a>\n              <a href=\"#\" title=\"\">Sales</a>\n              <a href=\"#\" title=\"\">Travel</a>\n              <a href=\"#\" title=\"\">Our Blog</a>\n              <a href=\"#\" title=\"\">Trade</a>\n              <a href=\"#\" title=\"\">Traffic</a>\n            </div>\n          </div>\n        </aside>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/bl-list/bl-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blog/bl-list/bl-list.component.ts ***!
  \***************************************************/
/*! exports provided: BlListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlListComponent", function() { return BlListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlListComponent = /** @class */ (function () {
    function BlListComponent() {
    }
    BlListComponent.prototype.ngOnInit = function () {
    };
    BlListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bl-list',
            template: __webpack_require__(/*! ./bl-list.component.html */ "./src/app/blog/bl-list/bl-list.component.html"),
            styles: [__webpack_require__(/*! ./bl-list.component.css */ "./src/app/blog/bl-list/bl-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlListComponent);
    return BlListComponent;
}());



/***/ }),

/***/ "./src/app/blog/bl-single/bl-single.component.css":
/*!********************************************************!*\
  !*** ./src/app/blog/bl-single/bl-single.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmwtc2luZ2xlL2JsLXNpbmdsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/bl-single/bl-single.component.html":
/*!*********************************************************!*\
  !*** ./src/app/blog/bl-single/bl-single.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Blog</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n       <div class=\"row\">\n         <div class=\"col-lg-9 column\">\n           <div class=\"blog-single\">\n             <div class=\"bs-thumb\"><img src=\"assets/images/resource/bs1.jpg\" alt=\"\" /></div>\n             <ul class=\"post-metas\"><li><a href=\"#\" title=\"\"><img src=\"assets/images/resource/admin.jpg\" alt=\"\" />Ali TUFAN</a></li><li><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>November 23, 2017</a></li><li><a class=\"metascomment\" href=\"#\" title=\"\"><i class=\"la la-comments\"></i>4 comments</a></li><li><a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Travel, Skill, Jobs</a></li></ul>\n             <h2>11 Tips to Help You Get New Clients Through Cold Calling</h2>\n             <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>\n             <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>\n             <h3>About Business Network</h3>\n             <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>\n             <blockquote><p><i>“</i><span>You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that youth reports this exciting news to his friends that<i>”</i></span></p><strong>Ali TUFAN</strong></blockquote>\n             <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much</p>\n             <div class=\"tags-share\">\n                 <div class=\"tags_widget\">\n                   <span>Tags</span>\n                   <a href=\"#\" title=\"\">Adwords</a>\n                   <a href=\"#\" title=\"\">Sales</a>\n                   <a href=\"#\" title=\"\">Travel</a>\n                 </div>\n               <div class=\"share-bar\">\n                 <a href=\"#\" title=\"\" class=\"share-fb\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" title=\"\" class=\"share-twitter\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\" title=\"\" class=\"share-google\"><i class=\"la la-google\"></i></a><span>Share</span>\n               </div>\n             </div>\n             <div class=\"post-navigation \">\n               <div class=\"post-hist prev\">\n                 <a href=\"#\" title=\"\"><i class=\"la la-arrow-left\"></i><span class=\"post-histext\">Prev Post<i>Hey Job Seeker, It’s Time</i></span></a>\n               </div>\n               <div class=\"post-hist next\">\n                 <a href=\"#\" title=\"\"><span class=\"post-histext\">Next Post<i>11 Tips to Help You Get New</i></span><i class=\"la la-arrow-right\"></i></a>\n               </div>\n             </div>\n             <div class=\"comment-sec\">\n               <h3>4 Comments</h3>\n               <ul>\n                 <li>\n                   <div class=\"comment\">\n                     <div class=\"comment-avatar\"> <img src=\"assets/images/resource/err1.jpg\" alt=\"\" /> </div>\n                     <div class=\"comment-detail\">\n                       <h3>Ali TUFAN</h3>\n                       <div class=\"date-comment\"><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>Jan 16, 2016 07:48 am</a></div>\n                       <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much. </p>\n                       <a href=\"#\" title=\"\"><i class=\"la la-reply\"></i>Reply</a>\n                     </div>\n                   </div>\n                   <ul class=\"comment-child\">\n                     <li>\n                       <div class=\"comment\">\n                         <div class=\"comment-avatar\"> <img src=\"assets/images/resource/err2.jpg\" alt=\"\" /> </div>\n                         <div class=\"comment-detail\">\n                           <h3>Rachel LOIS</h3>\n                           <div class=\"date-comment\"><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>Jan 16, 2016 07:48 am</a></div>\n                           <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much. </p>\n                           <a href=\"#\" title=\"\"><i class=\"la la-reply\"></i>Reply</a>\n                         </div>\n                       </div>\n                     </li>\n                   </ul>\n                 </li>\n                 <li>\n                   <div class=\"comment\">\n                     <div class=\"comment-avatar\"> <img src=\"assets/images/resource/err3.jpg\" alt=\"\" /> </div>\n                     <div class=\"comment-detail\">\n                       <h3>Kate ROSELINE</h3>\n                       <div class=\"date-comment\"><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>Jan 16, 2016 07:48 am</a></div>\n                       <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much. </p>\n                       <a href=\"#\" title=\"\"><i class=\"la la-reply\"></i>Reply</a>\n                     </div>\n                   </div>\n                 </li>\n                 <li>\n                   <div class=\"comment\">\n                     <div class=\"comment-avatar\"> <img src=\"assets/images/resource/err4.jpg\" alt=\"\" /> </div>\n                     <div class=\"comment-detail\">\n                       <h3>Luis DANIEL</h3>\n                       <div class=\"date-comment\"><a href=\"#\" title=\"\"><i class=\"la la-calendar-o\"></i>Jan 16, 2016 07:48 am</a></div>\n                       <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much. </p>\n                       <a href=\"#\" title=\"\"><i class=\"la la-reply\"></i>Reply</a>\n                     </div>\n                   </div>\n                 </li>\n               </ul>\n             </div>\n             <div class=\"commentform-sec\">\n               <h3>Leave a Reply</h3>\n               <form>\n                 <div class=\"row\">\n                   <div class=\"col-lg-12\">\n                     <span class=\"pf-title\">Description</span>\n                     <div class=\"pf-field\">\n                       <textarea></textarea>\n                     </div>\n                   </div>\n                   <div class=\"col-lg-8\">\n                     <span class=\"pf-title\">Full Name</span>\n                     <div class=\"pf-field\">\n                       <input type=\"text\" placeholder=\"ALi TUFAN\" />\n                     </div>\n                   </div>\n                   <div class=\"col-lg-8\">\n                     <span class=\"pf-title\">Email</span>\n                     <div class=\"pf-field\">\n                       <input type=\"text\" placeholder=\"\" />\n                     </div>\n                   </div>\n                   <div class=\"col-lg-8\">\n                     <span class=\"pf-title\">Phone</span>\n                     <div class=\"pf-field\">\n                       <input type=\"text\" placeholder=\"\" />\n                     </div>\n                   </div>\n                   <div class=\"col-lg-12\">\n                     <button type=\"submit\">Post Comment</button>\n                   </div>\n                 </div>\n               </form>\n             </div>\n           </div>\n        </div>\n        <aside class=\"col-lg-3 column\">\n          <div class=\"widget\">\n             <div class=\"search_widget_job no-margin\">\n               <div class=\"field_w_search\">\n                 <input placeholder=\"Search Keywords\" type=\"text\">\n                 <i class=\"la la-search\"></i>\n               </div><!-- Search Widget -->\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Categories</h3>\n             <div class=\"sidebar-links\">\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Education</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Information</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Jobs</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Learn</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Skill</a>\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Recent Posts</h3>\n             <div class=\"post_widget\">\n               <div class=\"mini-blog\">\n                 <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb1.jpg\" alt=\"\" /></a></span>\n                 <div class=\"mb-info\">\n                   <h3><a href=\"#\" title=\"\">Canada adds 12,500 jobs in modest July rebound</a></h3>\n                   <span>October 25, 2017</span>\n                 </div>\n               </div>\n               <div class=\"mini-blog\">\n                 <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb2.jpg\" alt=\"\" /></a></span>\n                 <div class=\"mb-info\">\n                   <h3><a href=\"#\" title=\"\">How to “Woo” a Recruiter and Land Your Dream Job</a></h3>\n                   <span>October 25, 2017</span>\n                 </div>\n               </div>\n               <div class=\"mini-blog\">\n                 <span><a href=\"#\" title=\"\"><img src=\"assets/images/resource/mb3.jpg\" alt=\"\" /></a></span>\n                 <div class=\"mb-info\">\n                   <h3><a href=\"#\" title=\"\">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h3>\n                   <span>October 25, 2017</span>\n                 </div>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Archives</h3>\n             <div class=\"sidebar-links\">\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>April 2017</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>March 2016</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>February 2015</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>July 2013</a>\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Meta</h3>\n             <div class=\"sidebar-links\">\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Log in</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Entries RSS</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>Comments RSS</a>\n               <a href=\"#\" title=\"\"><i class=\"la la-angle-right\"></i>WordPress.org</a>\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Our Photo</h3>\n             <div class=\"photo-widget\">\n               <div class=\"row\">\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op1.jpg\" alt=\"\" /></a> </div>\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op2.jpg\" alt=\"\" /></a> </div>\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op3.jpg\" alt=\"\" /></a> </div>\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op4.jpg\" alt=\"\" /></a> </div>\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op5.jpg\" alt=\"\" /></a> </div>\n                 <div class=\"col-lg-4 col-md-2 col-sm-2 col-xs-6\"> <a href=\"#\" title=\"\"><img src=\"assets/images/resource/op6.jpg\" alt=\"\" /></a> </div>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget\">\n             <h3>Tags</h3>\n             <div class=\"tags_widget\">\n               <a href=\"#\" title=\"\">Adwords</a>\n               <a href=\"#\" title=\"\">Sales</a>\n               <a href=\"#\" title=\"\">Travel</a>\n               <a href=\"#\" title=\"\">Our Blog</a>\n               <a href=\"#\" title=\"\">Trade</a>\n               <a href=\"#\" title=\"\">Traffic</a>\n             </div>\n           </div>\n        </aside>\n       </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/bl-single/bl-single.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/bl-single/bl-single.component.ts ***!
  \*******************************************************/
/*! exports provided: BlSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlSingleComponent", function() { return BlSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlSingleComponent = /** @class */ (function () {
    function BlSingleComponent() {
    }
    BlSingleComponent.prototype.ngOnInit = function () {
    };
    BlSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bl-single',
            template: __webpack_require__(/*! ./bl-single.component.html */ "./src/app/blog/bl-single/bl-single.component.html"),
            styles: [__webpack_require__(/*! ./bl-single.component.css */ "./src/app/blog/bl-single/bl-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlSingleComponent);
    return BlSingleComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2EtYXBwbGllZC1qb2JzL2NhLWFwcGxpZWQtam9icy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"overlape\">-->\n<!--<div class=\"block no-padding\">-->\n<!--<div data-velocity=\"-.1\" style=\"background: url(-->\n<!--assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"-->\n<!--class=\"parallax scrolly-invisible no-parallax\"></div>&lt;!&ndash; PARALLAX BACKGROUND IMAGE &ndash;&gt;-->\n<!--<div class=\"container fluid\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-lg-12\">-->\n<!--<div class=\"inner-header\">-->\n<!--<h3>Welcome {{_ser.candidateData.information.name.first}} {{_ser.candidateData.information.name.last}}</h3>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n\n<!--<section>-->\n<!--<div class=\"block no-padding\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row no-gape\">-->\n<!--<aside class=\"col-lg-3 column border-right\">-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"tree_widget-sec\">-->\n<!--<ul>-->\n<!--<li>-->\n<!--<a routerLink=\"../profile\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>Profile</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../applied-jobs\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-briefcase\"></i>Applied Jobs</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../cv-cover\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>CV & Cover Letter</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../change-password\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"skill-perc\">-->\n<!--<h3>Skills Percentage </h3>-->\n<!--<p>Put value for \"Cover Image\" field to increase your skill up to \"15%\"</p>-->\n<!--<div class=\"skills-bar\">-->\n<!--<span>85%</span>-->\n<!--<div class=\"second circle\" data-size=\"155\" data-thickness=\"60\">-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</aside>-->\n<!--<div class=\"col-lg-9 column\">-->\n<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n    <h3>Manage Jobs</h3>\n    <table>\n      <thead>\n      <tr>\n        <td>Applied Job</td>\n        <td>Position</td>\n        <td>Date</td>\n        <td></td>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>\n          <div class=\"table-list-title\">\n            <i>Massimo Artemisis</i><br/>\n            <span><i class=\"la la-map-marker\"></i>Sacramento, California</span>\n          </div>\n        </td>\n        <td>\n          <div class=\"table-list-title\">\n            <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n          </div>\n        </td>\n        <td>\n          <span>October 27, 2017</span><br/>\n        </td>\n        <td>\n          <ul class=\"action_job\">\n            <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n          </ul>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <div class=\"table-list-title\">\n            <i>StarHealth</i><br/>\n            <span><i class=\"la la-map-marker\"></i>Rennes, France</span>\n          </div>\n        </td>\n        <td>\n          <div class=\"table-list-title\">\n            <h3><a href=\"#\" title=\"\">Regional Sales Manager South east Asia</a></h3>\n          </div>\n        </td>\n        <td>\n          <span>October 27, 2017</span><br/>\n        </td>\n        <td>\n          <ul class=\"action_job\">\n            <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n          </ul>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <div class=\"table-list-title\">\n            <i>Altes Bank</i><br/>\n            <span><i class=\"la la-map-marker\"></i>Istanbul, Turkey</span>\n          </div>\n        </td>\n        <td>\n          <div class=\"table-list-title\">\n            <h3><a href=\"#\" title=\"\">C Developer (Senior) C .Net</a></h3>\n          </div>\n        </td>\n        <td>\n          <span>October 27, 2017</span><br/>\n        </td>\n        <td>\n          <ul class=\"action_job\">\n            <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n          </ul>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <div class=\"table-list-title\">\n            <i>MediaLab</i><br/>\n            <span><i class=\"la la-map-marker\"></i>Ajax, Ontario</span>\n          </div>\n        </td>\n        <td>\n          <div class=\"table-list-title\">\n            <h3><a href=\"#\" title=\"\">Marketing Director</a></h3>\n          </div>\n        </td>\n        <td>\n          <span>October 27, 2017</span><br/>\n        </td>\n        <td>\n          <ul class=\"action_job\">\n            <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n          </ul>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CaAppliedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaAppliedJobsComponent", function() { return CaAppliedJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CaAppliedJobsComponent = /** @class */ (function () {
    function CaAppliedJobsComponent(_ser, _router) {
        this._ser = _ser;
        this._router = _router;
        this.candidateData = this._ser.candidateData;
        if (this.candidateData.accountId == null) {
            this._router.navigate([this._router.url.replace(/[\w-]+$/, '')]);
        }
    }
    CaAppliedJobsComponent.prototype.ngOnInit = function () {
    };
    CaAppliedJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-applied-jobs',
            template: __webpack_require__(/*! ./ca-applied-jobs.component.html */ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.html"),
            styles: [__webpack_require__(/*! ./ca-applied-jobs.component.css */ "./src/app/candidate/dashboard/ca-applied-jobs/ca-applied-jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CaAppliedJobsComponent);
    return CaAppliedJobsComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2EtY2hhbmdlLXBhc3N3b3JkL2NhLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"overlape\">-->\n<!--<div class=\"block no-padding\">-->\n<!--<div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"-->\n<!--class=\"parallax scrolly-invisible no-parallax\"></div>&lt;!&ndash; PARALLAX BACKGROUND IMAGE &ndash;&gt;-->\n<!--<div class=\"container fluid\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-lg-12\">-->\n<!--<div class=\"inner-header\">-->\n<!--<h3>Welcome {{_ser.candidateData.information.name.first}} {{_ser.candidateData.information.name.last}}</h3>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n\n<!--<section>-->\n<!--<div class=\"block no-padding\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row no-gape\">-->\n<!--<aside class=\"col-lg-3 column border-right\">-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"tree_widget-sec\">-->\n<!--<ul>-->\n<!--<li>-->\n<!--<a routerLink=\"../profile\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>Profile</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../applied-jobs\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-briefcase\"></i>Applied Jobs</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../cv-cover\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>CV & Cover Letter</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../change-password\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"skill-perc\">-->\n<!--<h3>Skills Percentage </h3>-->\n<!--<p>Put value for \"Cover Image\" field to increase your skill up to \"15%\"</p>-->\n<!--<div class=\"skills-bar\">-->\n<!--<span>85%</span>-->\n<!--<div class=\"second circle\" data-size=\"155\" data-thickness=\"60\">-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</aside>-->\n<!--<div class=\"col-lg-9 column\">-->\n<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n    <h3>Change Password</h3>\n    <div class=\"change-password\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <span class=\"pf-title\">Old Password</span>\n            <div class=\"pf-field\">\n              <input type=\"password\"/>\n            </div>\n            <span class=\"pf-title\">New Password</span>\n            <div class=\"pf-field\">\n              <input type=\"password\"/>\n            </div>\n            <span class=\"pf-title\">Confirm Password</span>\n            <div class=\"pf-field\">\n              <input type=\"password\"/>\n            </div>\n            <!--<button type=\"submit\">Update</button>-->\n          </div>\n          <div class=\"col-lg-6\">\n            <i class=\"la la-key big-icon\"></i>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CaChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaChangePasswordComponent", function() { return CaChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");



var CaChangePasswordComponent = /** @class */ (function () {
    function CaChangePasswordComponent(_ser) {
        this._ser = _ser;
        this.candidateData = this._ser.candidateData;
    }
    CaChangePasswordComponent.prototype.ngOnInit = function () {
    };
    CaChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-change-password',
            template: __webpack_require__(/*! ./ca-change-password.component.html */ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.html"),
            styles: [__webpack_require__(/*! ./ca-change-password.component.css */ "./src/app/candidate/dashboard/ca-change-password/ca-change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"]])
    ], CaChangePasswordComponent);
    return CaChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-img-bar {\r\n  margin-top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2Rhc2hib2FyZC9jYS1jdi1jb3Zlci9jYS1jdi1jb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2Rhc2hib2FyZC9jYS1jdi1jb3Zlci9jYS1jdi1jb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1pbWctYmFyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n    <h3>CV & Cover Letter</h3>\n    <div class=\"coverletter-sec\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <span class=\"pf-title\">Upload CV</span>\n            <div class=\"upload-img-bar\">\n              <input #cv (change)=\"upload($event, 'cv')\" name=\"cv\"\n                     style=\"display: none;\"\n                     type=\"file\">\n              <!--<span class=\"round\">-->\n              <!--<img alt=\"\" src=\"http://localhost:3000/upload/{{candidateData.profile.profileImage}}\"/>&lt;!&ndash;<i>x</i>&ndash;&gt;-->\n            <!--</span>-->\n              <div class=\"upload-info\">\n                <a (click)=\"cv.click()\" title=\"\">Browse</a>\n                <span>Max file size is 5MB, and Suitable files are .pdf & .doc</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <span class=\"pf-title\">Select Your CV</span>\n            <div class=\"pf-field\">\n              <select data-placeholder=\"Select Your CV\" class=\"chosen\" name=\"cv\" [(ngModel)]=\"candidateData.profile.cv\">\n                <option *ngFor=\"let cv of candidateData.profile.cvs\">{{cv}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-lg-12\">\n            <span class=\"pf-title\">Cover Letter</span>\n            <div class=\"pf-field\">\n              <textarea [(ngModel)]=\"candidateData.profile.coverLetter\" name=\"coverLetter\"></textarea>\n            </div>\n          </div>\n          <!--<div class=\"col-lg-12\" class=\"mb-5\">-->\n            <!--<button type=\"submit\">Update</button>-->\n          <!--</div>-->\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.ts ***!
  \**************************************************************************/
/*! exports provided: CaCvCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaCvCoverComponent", function() { return CaCvCoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CaCvCoverComponent = /** @class */ (function () {
    function CaCvCoverComponent(_ser, _router) {
        this._ser = _ser;
        this._router = _router;
        this.candidateData = this._ser.candidateData;
        if (this.candidateData.accountId == null) {
            this._router.navigate([this._router.url.replace(/[\w-]+$/, '')]);
        }
    }
    CaCvCoverComponent.prototype.ngOnInit = function () {
    };
    CaCvCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-cv-cover',
            template: __webpack_require__(/*! ./ca-cv-cover.component.html */ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.html"),
            styles: [__webpack_require__(/*! ./ca-cv-cover.component.css */ "./src/app/candidate/dashboard/ca-cv-cover/ca-cv-cover.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CaCvCoverComponent);
    return CaCvCoverComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2EtZGFzaGJvYXJkL2NhLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"overlape\">-->\n<!--<div class=\"block no-padding\">-->\n<!--<div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div>&lt;!&ndash; PARALLAX BACKGROUND IMAGE &ndash;&gt;-->\n<!--<div class=\"container fluid\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-lg-12\">-->\n<!--<div class=\"inner-header\">-->\n<!--<h3>Welcome {{_ser.candidateData.information.name.first}} {{_ser.candidateData.information.name.last}}</h3>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n\n<!--<section>-->\n<!--<div class=\"block no-padding\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row no-gape\">-->\n<!--<aside class=\"col-lg-3 column border-right\">-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"tree_widget-sec\">-->\n<!--<ul>-->\n<!--<li>-->\n<!--<a routerLink=\"./profile\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>Profile</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"./applied-jobs\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-briefcase\"></i>Applied Jobs</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"./cv-cover\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>CV & Cover Letter</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"./change-password\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--</aside>-->\n<!--<div class=\"col-lg-9 column\">-->\n<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n    <h3>Candidates Dashboard</h3>\n    <div class=\"cat-sec\">\n      <div class=\"row no-gape\">\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category\">\n            <a routerLink=\"./profile\" title=\"\">\n              <i class=\"la la-user\"></i>\n              <span>Profile</span>\n              <!--<p>View Profile</p>-->\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category\">\n            <a routerLink=\"./cv-cover\" title=\"\">\n              <i class=\"la la-file-text\"></i>\n              <span>CV & Cover Letter</span>\n              <!--<p>(05 Jobs)</p>-->\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category\">\n            <a routerLink=\"./resume\" title=\"\">\n              <i class=\"la la-paper-plane\"></i>\n              <span>Resume</span>\n              <!--<p>Create New Resume</p>-->\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"cat-sec\">\n      <div class=\"row no-gape mb-5\">\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category\">\n            <a routerLink=\"./applied-jobs\" title=\"\">\n              <i class=\"la la-briefcase\"></i>\n              <span>Applied Jobs</span>\n              <!--<p>14 Applications</p>-->\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category follow-companies-popup\">\n            <a routerLink=\"./change-password\" title=\"\">\n              <i class=\"la la-lock\"></i>\n              <span>Change password</span>\n              <!--<p></p>-->\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n          <div class=\"p-category follow-companies-popup\">\n            <a routerLink=\"../logout\" title=\"\">\n              <i class=\"la la-unlink\"></i>\n              <span>Logout</span>\n              <!--<p></p>-->\n            </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: CaDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaDashboardComponent", function() { return CaDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var l = console.log;
var CaDashboardComponent = /** @class */ (function () {
    function CaDashboardComponent() {
    }
    CaDashboardComponent.prototype.ngOnInit = function () {
    };
    CaDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-dashboard',
            template: __webpack_require__(/*! ./ca-dashboard.component.html */ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./ca-dashboard.component.css */ "./src/app/candidate/dashboard/ca-dashboard/ca-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CaDashboardComponent);
    return CaDashboardComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.upload-img-bar {\r\n  margin-top: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2Rhc2hib2FyZC9jYS1kYi1wcm9maWxlL2NhLWRiLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2Rhc2hib2FyZC9jYS1kYi1wcm9maWxlL2NhLWRiLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udXBsb2FkLWltZy1iYXIge1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"overlape\">-->\n<!--<div class=\"block no-padding\">-->\n<!--<div class=\"parallax scrolly-invisible no-parallax\"-->\n<!--data-velocity=\"-.1\"-->\n<!--style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422px transparent;\"></div>-->\n<!--&lt;!&ndash; PARALLAX BACKGROUND IMAGE &ndash;&gt;-->\n<!--<div class=\"container fluid\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-lg-12\">-->\n<!--<div class=\"inner-header\">-->\n<!--<h3>Welcome {{candidateData.information.name.first}} {{candidateData.information.name.last}}</h3>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n\n<!--<section>-->\n<!--<div class=\"block no-padding\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row no-gape\">-->\n<!--<aside class=\"col-lg-3 column border-right\">-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"tree_widget-sec\">-->\n<!--<ul>-->\n<!--<li>-->\n<!--<a routerLink=\"../profile\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>Profile</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../applied-jobs\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-briefcase\"></i>Applied Jobs</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../cv-cover\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-file-text\"></i>CV & Cover Letter</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"../change-password\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>-->\n<!--</li>-->\n<!--<li>-->\n<!--<a routerLink=\"\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--</aside>-->\n<!--<div class=\"col-lg-9 column\">-->\n\n<div class=\"padding-left\">\n  <!--<form>-->\n  <!--</form>-->\n\n  <div class=\"profile-title\">\n    <h3>My Profile</h3>\n  </div>\n  <div class=\"profile-form-edit\">\n    <form>\n      <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Upload Profile image</span>\n          <div class=\"upload-img-bar\">\n            <input #profileImageUpload (change)=\"upload($event, 'profilePicture')\" name=\"profilePicture\"\n                   style=\"display: none;\"\n                   type=\"file\">\n            <span class=\"round\">\n              <img alt=\"\" src=\"http://localhost:3000/upload/{{candidateData.profile.profileImage}}\"/><!--<i>x</i>-->\n            </span>\n            <div class=\"upload-info\">\n              <a (click)=\"profileImageUpload.click()\" title=\"\">Browse</a>\n              <span>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">First name</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.name.first\" name=\"firstName\" placeholder=\"Your first Name\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Middle name</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.name.middle\" name=\"middleName\" placeholder=\"Your middle Name\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Last name</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.name.last\" name=\"lastName\" placeholder=\"Your last Name\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Mobile</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.mobile\" name=\"mobile\" placeholder=\"ex: 0201234567890\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Email</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.email\" name=\"email\"\n                   placeholder=\"ex: email@mail.com\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Gender</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.information.gender\" class=\"chosen\" name=\"gender\">\n              <option value=\"true\">Male</option>\n              <option value=\"false\">Female</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Birth date</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.birthDate\" name=\"birthDate\" type=\"date\"/>\n          </div>\n        </div>\n\n        <!--<div class=\"col-lg-3\">-->\n        <!--<span class=\"pf-title\">Max</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"30K\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-3\">-->\n        <!--<span class=\"pf-title\">Expected Salary($) min</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"30k\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-3\">-->\n        <!--<span class=\"pf-title\">Max</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"40K\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Education Levels</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.education.educationLevel\" class=\"chosen\" name=\"educationLevel\">\n              <option *ngFor=\"let eduLevel of _ser.educationLevel\">\n                {{eduLevel}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <!--<div class=\"col-lg-6\">-->\n        <!--<span class=\"pf-title\">Languages</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<div class=\"pf-field\">-->\n        <!--<select class=\"chosen\">-->\n        <!--<option>English</option>-->\n        <!--<option>German</option>-->\n        <!--</select>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n\n        <!--<div class=\"col-lg-12\">-->\n        <!--<span class=\"pf-title\">Categories</span>-->\n        <!--<div class=\"pf-field no-margin\">-->\n        <!--<ul class=\"tags\">-->\n        <!--<li class=\"addedTag\">Photoshop<span onclick=\"$(this).parent().remove();\"-->\n        <!--class=\"tagRemove\">x</span><input-->\n        <!--type=\"hidden\" name=\"tags[]\" value=\"Photoshop\"></li>-->\n        <!--<li class=\"addedTag\">Digital & Creative<span onclick=\"$(this).parent().remove();\"-->\n        <!--class=\"tagRemove\">x</span><input-->\n        <!--type=\"hidden\" name=\"tags[]\" value=\"Digital\"></li>-->\n        <!--<li class=\"addedTag\">Agency<span onclick=\"$(this).parent().remove();\" class=\"tagRemove\">x</span><input-->\n        <!--type=\"hidden\" name=\"tags[]\" value=\"Agency\"></li>-->\n        <!--<li class=\"tagAdd taglist\">-->\n        <!--<input type=\"text\" id=\"search-field\">-->\n        <!--</li>-->\n        <!--</ul>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<script>-->\n        <!--$.expr[\":\"].contains = $.expr.createPseudo(function (arg) {-->\n        <!--return function (elem) {-->\n        <!--return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;-->\n        <!--};-->\n        <!--});-->\n        <!--$(document).on('ready', function () {-->\n        <!--$('#addTagBtn').on('click', function () {-->\n        <!--$('#tags option:selected').each(function () {-->\n        <!--$(this).appendTo($('#selectedTags'));-->\n        <!--});-->\n        <!--});-->\n        <!--$('#removeTagBtn').on('click', function () {-->\n        <!--$('#selectedTags option:selected').each(function (el) {-->\n        <!--$(this).appendTo($('#tags'));-->\n        <!--});-->\n        <!--});-->\n        <!--$('.tagRemove').on('click', function (event) {-->\n        <!--event.preventDefault();-->\n        <!--$(this).parent().remove();-->\n        <!--});-->\n        <!--$('ul.tags').on('click', function () {-->\n        <!--$('#search-field').focus();-->\n        <!--});-->\n        <!--$('#search-field').keypress(function (event) {-->\n        <!--if (event.which == '13') {-->\n        <!--if (($(this).val() != '') && ($(\".tags .addedTag:contains('\" + $(this).val() + \"') \").length == 0)) {-->\n        <!--$('<li class=\"addedTag\">' + $(this).val() + '<span class=\"tagRemove\" onclick=\"$(this).parent().remove();\">x</span><input type=\"hidden\" value=\"' + $(this).val() + '\" name=\"tags[]\"></li>').insertBefore('.tags .tagAdd');-->\n        <!--$(this).val('');-->\n        <!--} else {-->\n        <!--$(this).val('');-->\n        <!--}-->\n        <!--}-->\n        <!--});-->\n        <!--});-->\n        <!--$(function () {-->\n        <!--$(\"form\").submit(function () {-->\n        <!--return false;-->\n        <!--});-->\n        <!--});-->\n        <!--</script>-->\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Upload National ID Image</span>\n          <div class=\"pf-field\">\n            <div class=\"upload-img-bar \">\n              <input #nationalIdImage (change)=\"upload($event, 'nationalIdImage')\" name=\"nationalIdImage\"\n                     style=\"display: none;\"\n                     type=\"file\">\n              <span class=\"round\">\n        <img alt=\"\" src=\"http://localhost:3000/upload/{{candidateData.profile.nationalIdImage}}\"/><!--<i>x</i>--></span>\n              <div class=\"upload-info\">\n                <a (click)=\"nationalIdImage.click()\" title=\"\">Browse</a>\n                <span>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">National ID Number</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.profile.nationalId\" name=\"nationalId\" placeholder=\"ex: 21234567891234\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Job Title</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.experience.jobTitle\" name=\"jobTitle\" placeholder=\"ex: UX / UI Designer\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Experience Level</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.experience.careerLevel\" class=\"chosen\" name=\"careerLevel\">\n              <option *ngFor=\"let careerLevel of _ser.careerLevels\">{{careerLevel}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Years of Experience</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.experience.yearsOfExperience\" class=\"chosen\" name=\"yearsOfExperience\">\n              <option *ngFor=\"let year of _ser.years0_50\">{{year}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Current Salary</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.profile.currentSalary.salary\" name=\"currentSalary\" placeholder=\"ex: $4000\"\n                   type=\"number\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-2\">\n          <span class=\"pf-title\">View in public</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.profile.currentSalary.viewState\" class=\"chosen\"\n                    name=\"currentSalaryState\">\n              <option value=\"true\">Yes</option>\n              <option value=\"false\">No</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Expected Salary</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.profile.expectedSalary.salary\" name=\"expectedSalary\"\n                   placeholder=\"ex: $3500\"\n                   type=\"number\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-2\">\n          <span class=\"pf-title\">View in public</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.profile.expectedSalary.viewState\" class=\"chosen\"\n                    name=\"expectedSalaryState\">\n              <option value=\"true\">Yes</option>\n              <option value=\"false\">No</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Show you profile in search result</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.options.allowedInSearch\" class=\"chosen\" name=\"allowInSearch\">\n              <option value=\"true\">Yes</option>\n              <option value=\"false\">No</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Still interested in new offers and previews applications</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.options.interested\" class=\"chosen\" name=\"interested\">\n              <option value=\"true\">Yes</option>\n              <option value=\"false\">No</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea [(ngModel)]=\"candidateData.profile.description\" name=\"description\"></textarea>\n          </div>\n        </div>\n\n        <!--<div class=\"col-lg-12\">-->\n          <!--<button type=\"submit\">Update</button>-->\n        <!--</div>-->\n\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\">\n    <h3>Social media</h3>\n    <form>\n      <div class=\"row\">\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Website</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.website\" name=\"website\"\n                   placeholder=\"www.__your__.com/\"\n                   type=\"text\"/>\n            <i class=\"fa fa-internet-explorer\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Linked-In</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.linkedIn\" name=\"linkedIn\"\n                   placeholder=\"www.linkedin.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-linkedin\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Git Hub</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.github\" name=\"github\"\n                   placeholder=\"www.github.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-github\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Stack overflow</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.stackOverflow\" name=\"stackOverflow\"\n                   placeholder=\"www.stackoverflow.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-stack-overflow\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Twitter</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.twitter\" name=\"twitter\"\n                   placeholder=\"www.twitter.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-twitter\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">You-Tube</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.youtube\" name=\"youtube\"\n                   placeholder=\"www.youtube.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-youtube\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Facebook</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.facebook\" name=\"facebook\"\n                   placeholder=\"www.facebook.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"fa fa-facebook\"></i>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Google plus</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.socialMedia.googlePlus\" name=\"googlePlus\"\n                   placeholder=\"www.google-plus.com/__your_details__\"\n                   type=\"text\"/>\n            <i class=\"la la-google\"></i>\n          </div>\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n  <div class=\"contact-edit\">\n    <h3>Contact</h3>\n    <form>\n\n      <div class=\"row\">\n\n        <!--<div class=\"col-lg-4\">-->\n        <!--<span class=\"pf-title\">Phone Number</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"ex: +90 538 963 58 96\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-4\">-->\n        <!--<span class=\"pf-title\">Email</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"__your_details__@email.com\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-4\">-->\n        <!--<span class=\"pf-title\">Website</span>-->\n        <!--<div class=\"pf-field\">-->\n        <!--<input type=\"text\" placeholder=\"www.__your_details__.com\"/>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!-- Countries -->\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Country</span>\n          <div class=\"pf-field\">\n            <select (change)=\"onChangeCountry($event.target.value)\"\n                    [(ngModel)]=\"candidateData.information.address.country\"\n                    class=\"chosen\" name=\"country\">\n              <option disabled selected value=\"-1\">--Select Country--</option>\n              <option *ngFor=\"let country of countryInfo; let i = index\"\n                      value=\"{{i}}_{{country['CountryName']}}\">{{country['CountryName']}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">State</span>\n          <div class=\"pf-field\">\n            <select (change)=\"onChangeState($event.target.value)\" [(ngModel)]=\"candidateData.information.address.state\"\n                    class=\"chosen\" name=\"state\">\n              <option disabled selected value=\"-1\">--Select State--</option>\n              <!--*ngIf=\"stateInfo == ''\"-->\n              <option *ngFor=\"let state of stateInfo; let j = index\"\n                      value=\"{{j}}_{{state['StateName']}}\">{{state['StateName']}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">City</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"candidateData.information.address.city\" class=\"chosen\" name=\"city\">\n              <option disabled selected value=\"-1\">--Select City--</option>\n              <!--*ngIf=\"cityInfo == ''\"-->\n              <option *ngFor=\"let city of cityInfo; let k = index\" value=\"{{k}}_{{city}}\">{{city}}</option>\n            </select>\n          </div>\n        </div>\n\n\n        <!-- Street -->\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">District</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.address.district\" name=\"district\"\n                   placeholder=\"Street ex: Hanoville\" type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Street</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.address.street\" name=\"street\"\n                   placeholder=\"Street ex: Al-Komy st.\" type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Building</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.address.building\" name=\"bulding\"\n                   placeholder=\"building.no ex: 63\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Floor</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.address.floor\" name=\"floor\" placeholder=\"floor.no ex: 13\"\n                   type=\"text\"/>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <span class=\"pf-title\">Apartment</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"candidateData.information.address.apartment\" name=\"apartment\"\n                   placeholder=\"apartment.no ex: 9 \" type=\"text\"/>\n          </div>\n        </div>\n\n        <!--<div class=\"col-lg-12\">-->\n        <!--<a href=\"#\" title=\"\" class=\"srch-lctn\">Search Location</a>-->\n        <!--</div>-->\n        <!--<div class=\"col-lg-12\">-->\n        <!--<span class=\"pf-title\">Maps</span>-->\n        <!--<div class=\"pf-map\">-->\n        <!--<div id=\"map_div\"></div>-->\n        <!--</div>-->\n        <!--</div>-->\n\n        <!--<div class=\"col-lg-12\">-->\n          <!--<button type=\"submit\">Update</button>-->\n        <!--</div>-->\n\n      </div>\n    </form>\n  </div>\n</div>\n\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: CaDbProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaDbProfileComponent", function() { return CaDbProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import {Observable} from 'rxjs';
// import {candidateData} from '../candidate-dashboard/candidate-dashboard.component';

// import {HttpClient} from '@angular/common/http';
// import {ActivatedRoute} from '@angular/router';
// import {ContenteditableDirective} from 'ng-contenteditable';

var CaDbProfileComponent = /** @class */ (function () {
    // Class constructor and init methods
    function CaDbProfileComponent(_ser, _router) {
        this._ser = _ser;
        this._router = _router;
        // declaring some variables
        this.countryInfo = [];
        this.stateInfo = [];
        this.cityInfo = [];
        this.candidateData = this._ser.candidateData;
        if (this.candidateData.accountId == null) {
            this._router.navigate([this._router.url.replace(/[\w-]+$/, '')]);
        }
    }
    CaDbProfileComponent.prototype.ngOnInit = function () {
        this.getCountries();
        console.log(this.candidateData);
    };
    // Methods
    CaDbProfileComponent.prototype.upload = function (event, propertyName) {
        this._ser.uploadCandidateImage(event, this._ser.candidateData).subscribe(function (u) { return console.log(u); }, function (e) { return console.log(e); });
    };
    // Countries - State - City
    CaDbProfileComponent.prototype.getCountries = function () {
        var _this = this;
        // this.countryInfo = this.countries.countries;
        this._ser.getCountries().subscribe(function (d) { return _this.countryInfo = d['Countries']; }, function (e) { return console.log(e); });
    };
    CaDbProfileComponent.prototype.onChangeCountry = function (countryValue) {
        // console.log(this.countryInfo, countryValue);
        // value = ;
        this.stateInfo = this.countryInfo[/^\d+/.exec(countryValue)[0]].States;
        // this.cityInfo = this.stateInfo[0].Cities;
    };
    CaDbProfileComponent.prototype.onChangeState = function (stateValue) {
        // console.log(this.stateInfo, stateValue);
        this.cityInfo = this.stateInfo[/^\d+/.exec(stateValue)[0]].Cities;
    };
    CaDbProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-db-profile',
            template: __webpack_require__(/*! ./ca-db-profile.component.html */ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.html"),
            styles: [__webpack_require__(/*! ./ca-db-profile.component.css */ "./src/app/candidate/dashboard/ca-db-profile/ca-db-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CaDbProfileComponent);
    return CaDbProfileComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2EtcmVzdW1lLW5ldy9jYS1yZXN1bWUtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"overlape\">-->\n<!--<div class=\"block no-padding\">-->\n<!--<div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"-->\n<!--class=\"parallax scrolly-invisible no-parallax\"></div>&lt;!&ndash; PARALLAX BACKGROUND IMAGE &ndash;&gt;-->\n<!--<div class=\"container fluid\">-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col-lg-12\">-->\n<!--<div class=\"inner-header\">-->\n<!--<h3>Welcome Ali TUFAN</h3>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n\n<!--<section>-->\n<!--<div class=\"block remove-top\">-->\n<!--<div class=\"container\">-->\n<!--<div class=\"row no-gape\">-->\n<!--<aside class=\"col-lg-3 column border-right\">-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"tree_widget-sec\">-->\n<!--<ul>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Company Profile</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-briefcase\"></i>Manage Jobs</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-money\"></i>Transactions</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-paper-plane\"></i>Resumes</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-user\"></i>Packages</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Post a New Job</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-flash\"></i>Job Alerts</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li class=\"inner-child\">-->\n<!--<a href=\"#\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>-->\n<!--<ul>-->\n<!--<ol><a href=\"#\" title=\"\">My Profile</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Social Network</a></ol>-->\n<!--<ol><a href=\"#\" title=\"\">Contact Information</a></ol>-->\n<!--</ul>-->\n<!--</li>-->\n<!--<li><a href=\"#\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"widget\">-->\n<!--<div class=\"skill-perc\">-->\n<!--<h3>Skills Percentage </h3>-->\n<!--<p>Put value for \"Cover Image\" field to increase your skill up to \"15%\"</p>-->\n<!--<div class=\"skills-bar\">-->\n<!--<span>85%</span>-->\n<!--<div class=\"second circle\" data-size=\"155\" data-thickness=\"60\">-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</aside>-->\n<!--<div class=\"col-lg-9 column\">-->\n<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n    <div class=\"border-title\">\n      <h3>Education</h3><a class=\"cancel\" href=\"#\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Title</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"Tooms..\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">From Date</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"06.11.2007\" type=\"text\" class=\"form-control datepicker\">\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">To Date</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"06.11.2012\" type=\"text\" class=\"form-control datepicker\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Institute</span>\n          <div class=\"pf-field\">\n            <input type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea></textarea>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <button type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"border-title\">\n      <h3>Work Experience</h3><a class=\"cancel\" href=\"#\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Title</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"Tooms..\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">From Date</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"06.11.2007\" type=\"text\" class=\"form-control datepicker\">\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">To Date</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"06.11.2012\" type=\"text\" class=\"form-control datepicker\">\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <p class=\"remember-label\">\n            <input type=\"checkbox\" name=\"cb\" id=\"fgfg\"><label for=\"fgfg\">Present</label>\n          </p>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Company</span>\n          <div class=\"pf-field\">\n            <input type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea></textarea>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <button type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"border-title\">\n      <h3>Portfolio</h3><a class=\"cancel\" href=\"#\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</p>\n        </div>\n        <div class=\"col-lg-12\">\n          <div class=\"upload-portfolio\">\n            <div class=\"uploadbox\">\n              <label for=\"file-upload\" class=\"custom-file-upload\">\n                <i class=\"la la-cloud-upload\"></i> <span>Upload Image</span>\n              </label>\n              <input id=\"file-upload\" type=\"file\" style=\"display: none;\"/>\n            </div>\n            <div class=\"uploadfield\">\n              <span class=\"pf-title\">Title</span>\n              <div class=\"pf-field\">\n                <input placeholder=\"Tooms..\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"uploadbutton\">\n              <button type=\"submit\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"border-title\">\n      <h3>Professional Skills</h3><a class=\"cancel\" href=\"#\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div class=\"resumeadd-form\">\n      <div class=\"row align-items-end\">\n        <div class=\"col-lg-7\">\n          <span class=\"pf-title\">Skill Heading</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <span class=\"pf-title\">Percentage</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <button type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"border-title\">\n      <h3>Awards</h3><a class=\"cancel\" href=\"#\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">06.11.2007</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">06.11.2012</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea></textarea>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <button type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.ts ***!
  \******************************************************************************/
/*! exports provided: CaResumeNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaResumeNewComponent", function() { return CaResumeNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CaResumeNewComponent = /** @class */ (function () {
    function CaResumeNewComponent() {
    }
    CaResumeNewComponent.prototype.ngOnInit = function () {
    };
    CaResumeNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-resume-new',
            template: __webpack_require__(/*! ./ca-resume-new.component.html */ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.html"),
            styles: [__webpack_require__(/*! ./ca-resume-new.component.css */ "./src/app/candidate/dashboard/ca-resume-new/ca-resume-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CaResumeNewComponent);
    return CaResumeNewComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume/ca-resume.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2EtcmVzdW1lL2NhLXJlc3VtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.html":
/*!************************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume/ca-resume.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\n  <div class=\"manage-jobs-sec\">\n\n    <!-- Education -->\n    <div *ngIf=\"addEdu\" class=\"border-title\">\n      <h3>Education</h3><a (click)=\"addEdu = false\" class=\"cancel\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div *ngIf=\"addEdu\" class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-3\">\n          <span class=\"pf-title\">Education type</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"education.educationType\" class=\"chosen\" name=\"\">\n              <option *ngFor=\"let edu of _ser.educationType\">{{edu}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3\">\n          <span class=\"pf-title\">From Date</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"education.startYear\" class=\"chosen\" name=\"\">\n              <option *ngFor=\"let year of _ser.years1950_2019\">{{year}}</option>\n            </select>\n            <!--<input class=\"form-control datepicker\" placeholder=\"06.11.2007\" type=\"date\">-->\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <span class=\"pf-title\">To Date</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"education.endYear\" class=\"chosen\" name=\"\">\n              <option *ngFor=\"let year of _ser.years1950_2026\">{{year}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <span class=\"pf-title\">Degree</span>\n          <div class=\"pf-field\">\n            <select [(ngModel)]=\"education.degreeType\" class=\"chosen\" id=\"\" name=\"\">\n              <option *ngFor=\"let degree of _ser.degreeType\">{{degree}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">Institute</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"education.institute\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">Field</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"education.field\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <span class=\"pf-title\">Percentage</span>\n          <div class=\"pf-field\">\n            <input [(ngModel)]=\"education.percentage\" max=\"100\" min=\"0\" type=\"number\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea [(ngModel)]=\"education.description\"></textarea>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <button (click)=\"pushEdu()\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!addEdu\" class=\"border-title\"><h3>Education</h3><a (click)=\"addEdu = true\" title=\"\">\n      <i class=\"la la-plus\"></i> Add Education</a>\n    </div>\n    <div class=\"edu-history-sec\">\n      <div *ngFor=\"let university of candidateData.education.university; let i = index\"\n           class=\"edu-history\">\n        <i class=\"la la-graduation-cap\"></i>\n        <div class=\"edu-hisinfo\">\n          <h3>{{university.educationType}}</h3>\n          <i>{{university.startYear}} - {{university.endYear || 'Present'}}</i>\n          <span>{{university.degreeType}}<i>in</i> {{university.field}} <i>from</i> {{university.institute}}\n            <i>{{university.percentage && 'Percent ' + university.percentage + ' %'}}</i></span>\n          <p>{{university.description}}</p>\n        </div>\n        <ul class=\"action_job\">\n          <!--<li><span>Edit</span><a href=\"#\" title=\"\"><i class=\"la la-pencil\"></i></a></li>-->\n          <li><span>Delete</span><a (click)=\"candidateData.education.university.splice(i, 1)\" title=\"\"><i\n            class=\"la la-trash-o\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- Work Experience -->\n    <div *ngIf=\"addWorkExp\" class=\"border-title\">\n      <h3>Work Experience</h3><a (click)=\"addWorkExp = false\" class=\"cancel\" title=\"\"><i class=\"la la-close\"></i> Cancel</a>\n    </div>\n    <div *ngIf=\"addWorkExp\" class=\"resumeadd-form\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Title</span>\n          <div class=\"pf-field\">\n            <input placeholder=\"Tooms..\" type=\"text\" [(ngModel)]=\"workExp.companyName\">\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">From Date</span>\n          <div class=\"pf-field\">\n            <input class=\"form-control datepicker\" placeholder=\"06.11.2007\" type=\"date\" [(ngModel)]=\"workExp.startDate\">\n          </div>\n        </div>\n        <div class=\"col-lg-5\">\n          <span class=\"pf-title\">To Date (keep it empty if still work there)</span>\n          <div class=\"pf-field\">\n            <input class=\"form-control datepicker\" placeholder=\"06.11.2012\" type=\"date\" [(ngModel)]=\"workExp.endDate\">\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <p class=\"remember-label\">\n            <label><input type=\"checkbox\">Present</label>\n          </p>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Company</span>\n          <div class=\"pf-field\">\n            <input type=\"text\" [(ngModel)]=\"workExp.companyName\">\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <span class=\"pf-title\">Description</span>\n          <div class=\"pf-field\">\n            <textarea [(ngModel)]=\"workExp.jobDescription\"></textarea>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <button (click)=\"pushWork()\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!addWorkExp\" class=\"border-title\"><h3>Work Experience</h3><a (click)=\"addWorkExp = true\" title=\"\"><i\n      class=\"la la-plus\"></i> Add Experience</a>\n    </div>\n    <div *ngFor=\"let work of candidateData.experience.workExperience\" class=\"edu-history-sec\">\n      <div class=\"edu-history style2\">\n        <i></i>\n        <div class=\"edu-hisinfo\">\n          <h3>{{work.jobTitle}} <span>{{work.companyName}}</span></h3>\n          <i>{{work.startDate}} - {{work.endDate || 'Present'}}</i>\n          <p>{{work.jobDescription}}</p>\n        </div>\n        <ul class=\"action_job\">\n          <!--<li><span>Edit</span><a href=\"#\" title=\"\"><i class=\"la la-pencil\"></i></a></li>-->\n          <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Portfolio -->\n    <div class=\"border-title\"><h3>Portfolio</h3><a href=\"#\" title=\"\"><i class=\"la la-plus\"></i> Add Portfolio</a></div>\n    <div class=\"mini-portfolio\">\n      <div class=\"mp-row\">\n        <div *ngFor=\"let portfolio of candidateData.profile.portfolio\" class=\"mp-col\">\n          <div class=\"mportolio\"><img alt=\"\" src=\"http://localhost:3000/upload/{{portfolio.image}}\"/><a\n            href=\"#\" title=\"\"><i class=\"la la-search\"></i></a></div>\n          <ul class=\"action_job\">\n            <h6>{{portfolio.title}}</h6>\n            <li><span>Edit</span><a href=\"#\" title=\"\"><i class=\"la la-pencil\"></i></a></li>\n            <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"border-title\"><h3>Professional Skills</h3><a href=\"#\" title=\"\"><i class=\"la la-plus\"></i> Add Skills</a>\n    </div>\n    <div class=\"progress-sec mb-5\">\n      <div *ngFor=\"let skill of candidateData.experience.skills\" class=\"progress-sec with-edit\">\n        <span>{{skill.title}}</span>\n        <div class=\"progressbar\">\n          <div [style.width.%]=\"skill.percentage\" class=\"progress\"><span>{{skill.percentage}}%</span></div>\n        </div>\n        <ul class=\"action_job\">\n          <li><span>Edit</span><a href=\"#\" title=\"\"><i class=\"la la-pencil\"></i></a></li>\n          <li><span>Delete</span><a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/dashboard/ca-resume/ca-resume.component.ts ***!
  \**********************************************************************/
/*! exports provided: CaResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaResumeComponent", function() { return CaResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CaResumeComponent = /** @class */ (function () {
    function CaResumeComponent(_ser, _router) {
        this._ser = _ser;
        this._router = _router;
        this.education = {
            'educationType': null,
            'institute': null,
            'degreeType': null,
            'percentage': null,
            'startYear': null,
            'endYear': null,
            'field': null,
            'description': null
        };
        this.workExp = {
            'companyName': null,
            'startDate': null,
            'endDate': null,
            'jobTitle': null,
            'jobDescription': null
        };
        this.addEdu = false;
        this.addWorkExp = false;
        this.candidateData = this._ser.candidateData;
        if (this.candidateData.accountId == null) {
            this._router.navigate([this._router.url.replace(/[\w-]+$/, '')]);
        }
    }
    CaResumeComponent.prototype.pushEdu = function () {
        if (Object.values(this.candidateData.education.university[0]).filter(function (v) { return !v; }).length === 8) {
            this.candidateData.education.university[0] = this.education;
        }
        else {
            this.candidateData.education.university.push(this.education);
        }
        this.candidateData.education.university.sort(function (a, b) { return +b.startYear - +a.startYear; });
        this.education = {
            'educationType': null,
            'institute': null,
            'degreeType': null,
            'percentage': null,
            'startYear': null,
            'endYear': null,
            'field': null,
            'description': null
        };
        this.addEdu = false;
    };
    CaResumeComponent.prototype.pushWork = function () {
        if (Object.values(this.candidateData.experience.workExperience[0]).filter(function (v) { return !v; }).length === 5) {
            this.candidateData.experience.workExperience[0] = this.workExp;
        }
        else {
            this.candidateData.experience.workExperience.push(this.workExp);
        }
        this.workExp = {
            'companyName': null,
            'startDate': null,
            'endDate': null,
            'jobTitle': null,
            'jobDescription': null
        };
        this.candidateData.experience.workExperience.sort(function (a, b) { return +/\d+/.exec(b.startDate) - +/\d+/.exec(a.startDate); });
        this.addWorkExp = false;
    };
    CaResumeComponent.prototype.ngOnInit = function () {
    };
    CaResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-resume',
            template: __webpack_require__(/*! ./ca-resume.component.html */ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.html"),
            styles: [__webpack_require__(/*! ./ca-resume.component.css */ "./src/app/candidate/dashboard/ca-resume/ca-resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CaResumeComponent);
    return CaResumeComponent;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/candidate-dashboard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/candidate/dashboard/candidate-dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: CandidateDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDashboardService", function() { return CandidateDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var l = console.log;
var CandidateDashboardService = /** @class */ (function () {
    function CandidateDashboardService(_http) {
        this._http = _http;
        this.careerLevels = [
            'Entry-Level',
            'Junior',
            'Senior',
            'Manager'
        ];
        this.proficiencyLevel = [
            'Beginner',
            'Elementary',
            'Intermediate',
            'Advanced',
            'Native'
        ];
        this.languages = [
            'Abkhazian',
            'Afar',
            'Afrikaans',
            'Akan',
            'Albanian',
            'Amharic',
            'Arabic',
            'Aragonese',
            'Armenian',
            'Assamese',
            'Avaric',
            'Avestan',
            'Aymara',
            'Azerbaijani',
            'Bambara',
            'Bashkir',
            'Basque',
            'Belarusian',
            'Bengali (Bangla)',
            'Bihari',
            'Bislama',
            'Bosnian',
            'Breton',
            'Bulgarian',
            'Burmese',
            'Catalan',
            'Chamorro',
            'Chechen',
            'Chichewa, Chewa, Nyanja',
            'Chinese',
            'Chinese (Simplified)',
            'Chinese (Traditional)',
            'Chuvash',
            'Cornish',
            'Corsican',
            'Cree',
            'Croatian',
            'Czech',
            'Danish',
            'Divehi, Dhivehi, Maldivian',
            'Dutch',
            'Dzongkha',
            'English',
            'Esperanto',
            'Estonian',
            'Ewe',
            'Faroese',
            'Fijian',
            'Finnish',
            'French',
            'Fula, Fulah, Pulaar, Pular',
            'Galician',
            'Gaelic (Scottish)',
            'Gaelic (Manx)',
            'Georgian',
            'German',
            'Greek',
            'Greenlandic',
            'Guarani',
            'Gujarati',
            'Haitian Creole',
            'Hausa',
            'Hebrew',
            'Herero',
            'Hindi',
            'Hiri Motu',
            'Hungarian',
            'Icelandic',
            'Ido',
            'Igbo',
            'Indonesian',
            'Interlingua',
            'Interlingue',
            'Inuktitut',
            'Inupiak',
            'Irish',
            'Italian',
            'Japanese',
            'Javanese',
            'Kalaallisut, Greenlandic',
            'Kannada',
            'Kanuri',
            'Kashmiri',
            'Kazakh',
            'Khmer',
            'Kikuyu',
            'Kinyarwanda (Rwanda)',
            'Kirundi',
            'Kyrgyz',
            'Komi',
            'Kongo',
            'Korean',
            'Kurdish',
            'Kwanyama',
            'Lao',
            'Latin',
            'Latvian (Lettish)',
            'Limburgish ( Limburger)',
            'Lingala',
            'Lithuanian',
            'Luga-Katanga',
            'Luganda, Ganda',
            'Luxembourgish',
            'Manx',
            'Macedonian',
            'Malagasy',
            'Malay',
            'Malayalam',
            'Maltese',
            'Maori',
            'Marathi',
            'Marshallese',
            'Moldavian',
            'Mongolian',
            'Nauru',
            'Navajo',
            'Ndonga',
            'Northern Ndebele',
            'Nepali',
            'Norwegian',
            'Norwegian bokmål',
            'Norwegian nynorsk',
            'Nuosu',
            'Occitan',
            'Ojibwe',
            'Old Church Slavonic, Old Bulgarian',
            'Oriya',
            'Oromo (Afaan Oromo)',
            'Ossetian',
            'Pāli',
            'Pashto, Zhuang,Pushto',
            'Persian (Farsi)',
            'Polish',
            'Portuguese',
            'Punjabi (Eastern)',
            'Quechua',
            'Romansh',
            'Romanian',
            'Russian',
            'Sami',
            'Samoan',
            'Sango',
            'Sanskrit',
            'Serbian',
            'Serbo-Croatian',
            'Sesotho',
            'Setswana',
            'Shona',
            'Sichuan Yi',
            'Sindhi',
            'Sinhalese',
            'Siswati',
            'Slovak',
            'Slovenian',
            'Somali',
            'Southern Ndebele',
            'Spanish',
            'Sundanese',
            'Swahili (Kiswahili)',
            'Swati',
            'Swedish',
            'Tagalog',
            'Tahitian',
            'Tajik',
            'Tamil',
            'Tatar',
            'Telugu',
            'Thai',
            'Tibetan',
            'Tigrinya',
            'Tonga',
            'Tsonga',
            'Turkish',
            'Turkmen',
            'Twi',
            'Uyghur',
            'Ukrainian',
            'Urdu',
            'Uzbek',
            'Venda',
            'Vietnamese',
            'Volapük',
            'Wallon',
            'Welsh',
            'Wolof',
            'Western Frisian',
            'Xhosa',
            'Yiddish',
            'Yoruba',
            'Zhuang, Chuang',
            'Zulu'
        ];
        this.candidateData = {
            '_id': null,
            'accountId': null,
            'candidateId': null,
            'information': {
                'name': { 'first': null, 'middle': null, 'last': null },
                'address': {
                    'country': null,
                    'state': null,
                    'city': null,
                    'district': null,
                    'street': null,
                    'building': null,
                    'floor': null,
                    'apartment': null
                },
                'socialMedia': {
                    'website': null,
                    'linkedIn': null,
                    'github': null,
                    'stackOverflow': null,
                    'youtube': null,
                    'googlePlus': null,
                    'facebook': null,
                    'twitter': null
                },
                'gender': null,
                'birthDate': null,
                'mobile': null,
                'email': null
            },
            'profile': {
                'currentSalary': { 'salary': null, 'viewState': null },
                'expectedSalary': { 'salary': null, 'viewState': null },
                'cvs': [null],
                'profileImage': 'default_profile_picture.jpg',
                'cv': null,
                'coverLetter': null,
                'description': null,
                'portfolio': [{ 'image': 'default_project_image.png', 'title': null }],
                'nationalId': null,
                'nationalIdImage': 'default_id_image.jpg'
            },
            'education': {
                'educationLevel': null,
                'university': [{
                        'educationType': null,
                        'institute': null,
                        'degreeType': null,
                        'percentage': null,
                        'startYear': null,
                        'endYear': null,
                        'field': null,
                        'description': null
                    }]
            },
            'experience': {
                'jobTitle': null,
                'careerLevel': null,
                'yearsOfExperience': null,
                'skills': [{ 'title': null, 'percentage': null }],
                'languages': [{ 'name': null, 'level': null }],
                'workExperience': [{
                        'companyName': null,
                        'startDate': null,
                        'endDate': null,
                        'jobTitle': null,
                        'jobDescription': null
                    }]
            },
            'appliedJobs': [{ 'jobId': null, 'jobState': null }],
            'options': { 'interested': null, 'allowedInSearch': null, 'blocked': null },
        };
        this.candidateEmpty = {
            '_id': null,
            'accountId': null,
            'candidateId': null,
            'information': {
                'name': { 'first': null, 'middle': null, 'last': null },
                'address': {
                    'country': null,
                    'state': null,
                    'city': null,
                    'district': null,
                    'street': null,
                    'building': null,
                    'floor': null,
                    'apartment': null
                },
                'socialMedia': {
                    'website': null,
                    'linkedIn': null,
                    'github': null,
                    'stackOverflow': null,
                    'youtube': null,
                    'googlePlus': null,
                    'facebook': null,
                    'twitter': null
                },
                'gender': null,
                'birthDate': null,
                'mobile': null,
                'email': null
            },
            'profile': {
                'currentSalary': { 'salary': null, 'viewState': null },
                'expectedSalary': { 'salary': null, 'viewState': null },
                'cvs': [null],
                'profileImage': 'default_profile_picture.jpg',
                'cv': null,
                'coverLetter': null,
                'description': null,
                'portfolio': [{ 'image': 'default_project_image.png', 'title': null }],
                'nationalId': null,
                'nationalIdImage': 'default_id_image.jpg'
            },
            'education': {
                'educationLevel': null,
                'university': [{
                        'educationType': null,
                        'institute': null,
                        'degreeType': null,
                        'percentage': null,
                        'startYear': null,
                        'endYear': null,
                        'field': null,
                        'description': null
                    }]
            },
            'experience': {
                'jobTitle': null,
                'careerLevel': null,
                'yearsOfExperience': null,
                'skills': [{ 'title': null, 'percentage': null }],
                'languages': [{ 'name': null, 'level': null }],
                'workExperience': [{
                        'companyName': null,
                        'startDate': null,
                        'endDate': null,
                        'jobTitle': null,
                        'jobDescription': null
                    }]
            },
            'appliedJobs': [{ 'jobId': null, 'jobState': null }],
            'options': { 'interested': null, 'allowedInSearch': null, 'blocked': null },
        };
        this.candidateBackup = {
            '_id': null,
            'accountId': null,
            'candidateId': null,
            'information': {
                'name': { 'first': null, 'middle': null, 'last': null },
                'address': {
                    'country': null,
                    'state': null,
                    'city': null,
                    'district': null,
                    'street': null,
                    'building': null,
                    'floor': null,
                    'apartment': null
                },
                'socialMedia': {
                    'website': null,
                    'linkedIn': null,
                    'github': null,
                    'stackOverflow': null,
                    'youtube': null,
                    'googlePlus': null,
                    'facebook': null,
                    'twitter': null
                },
                'gender': null,
                'birthDate': null,
                'mobile': null,
                'email': null
            },
            'profile': {
                'currentSalary': { 'salary': null, 'viewState': null },
                'expectedSalary': { 'salary': null, 'viewState': null },
                'cvs': [null],
                'profileImage': 'default_profile_picture.jpg',
                'cv': null,
                'coverLetter': null,
                'description': null,
                'portfolio': [{ 'image': 'default_project_image.png', 'title': null }],
                'nationalId': null,
                'nationalIdImage': 'default_id_image.jpg'
            },
            'education': {
                'educationLevel': null,
                'university': [{
                        'educationType': null,
                        'institute': null,
                        'degreeType': null,
                        'percentage': null,
                        'startYear': null,
                        'endYear': null,
                        'field': null,
                        'description': null
                    }]
            },
            'experience': {
                'jobTitle': null,
                'careerLevel': null,
                'yearsOfExperience': null,
                'skills': [{ 'title': null, 'percentage': null }],
                'languages': [{ 'name': null, 'level': null }],
                'workExperience': [{
                        'companyName': null,
                        'startDate': null,
                        'endDate': null,
                        'jobTitle': null,
                        'jobDescription': null
                    }]
            },
            'appliedJobs': [{ 'jobId': null, 'jobState': null }],
            'options': { 'interested': null, 'allowedInSearch': null, 'blocked': null },
        };
        this.educationLevel = [
            'No formal educational credential',
            'Postsecondary nondegree award',
            'High school diploma or equivalent',
            'Associate\'s degree',
            'Some college, no degree',
            'Bachelor\'s degree',
            'Master\'s degree',
            'Doctoral or professional degree'
        ];
        this.educationType = [
            'High school',
            'Institute',
            'University',
        ];
        this.degreeType = [
            'Course',
            'Specialization',
            'Secondary',
            'Diploma',
            'Professional',
            'Bachelor\'s degree',
            'Master\'s degree',
            'Doctoral degree',
        ];
        this.years1950_2019 = [
            1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963,
            1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977,
            1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
            1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
            2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
        ];
        this.years1950_2026 = [
            1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963,
            1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977,
            1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
            1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
            2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
            2020, 2021, 2022, 2023, 2024, 2025, 2026
        ];
        this.years0_50 = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
        ];
        // Enums
        this._countries_url = 'http://localhost:3000/jsons/Countries.json';
        this._baseUrl = 'http://localhost:3000/candidates/';
    }
    /* **************** Methods ***************** */
    // upload profile image
    CandidateDashboardService.prototype.uploadCandidateImage = function (event, candidateId) {
        return this._http.post(this._baseUrl + 'upload/' + candidateId, { 'profilePicture': event.target.files[0] });
    };
    CandidateDashboardService.prototype.saveCandidateChanges = function () {
        // let x = this._baseUrl + 'one/' + this.candidateData['_id']
        // delete(this.candidateData['_id']);
        l(this.candidateData, '--- candidateData from services ---');
        return this._http.patch(this._baseUrl + 'one/' + this.candidateData['_id'], this.candidateData);
    };
    // Get candidate from current candidate details from Database
    CandidateDashboardService.prototype.getCurrentCandidateData = function (candidateId) {
        return this._http.get(this._baseUrl + 'one/' + candidateId);
    };
    CandidateDashboardService.prototype.getAllCandidates = function () {
        return this._http.get(this._baseUrl + 'all');
    };
    // Countries
    CandidateDashboardService.prototype.getCountries = function () {
        return this._http.get(this._countries_url);
    };
    CandidateDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CandidateDashboardService);
    return CandidateDashboardService;
}());



/***/ }),

/***/ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree_widget-sec > ul > li.active > a,\r\n.tree_widget-sec > ul > li.active > a > i {\r\n  color: #8b91dd;\r\n}\r\n\r\nselect.chosen {\r\n  float: left;\r\n  width: 100%;\r\n  border: 2px solid #e8ecec;\r\n  margin-bottom: 20px;\r\n  border-radius: 8px;\r\n  padding: 14px 45px 14px 15px;\r\n  background: #ffffff;\r\n  font-family: 'Open Sans', serif;\r\n  font-size: 13px;\r\n  color: #101010;\r\n  line-height: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\ndiv.col-lg-12 > button[type=submit] {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.upload-img-bar {\r\n  margin-top: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2Rhc2hib2FyZC9jYW5kaWRhdGUtZGFzaGJvYXJkL2NhbmRpZGF0ZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9kYXNoYm9hcmQvY2FuZGlkYXRlLWRhc2hib2FyZC9jYW5kaWRhdGUtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZV93aWRnZXQtc2VjID4gdWwgPiBsaS5hY3RpdmUgPiBhLFxyXG4udHJlZV93aWRnZXQtc2VjID4gdWwgPiBsaS5hY3RpdmUgPiBhID4gaSB7XHJcbiAgY29sb3I6ICM4YjkxZGQ7XHJcbn1cclxuXHJcbnNlbGVjdC5jaG9zZW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGVjZWM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTRweCA0NXB4IDE0cHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMTAxMDEwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGl2LmNvbC1sZy0xMiA+IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnVwbG9hZC1pbWctYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div class=\"parallax scrolly-invisible no-parallax\"\n         data-velocity=\"-.1\"\n         style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"></div>\n    <!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome {{candidateData.information.name.first}} {{candidateData.information.name.last}}</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<nav class=\"navbar fixed-bottom navbar-expand-sm navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\n          aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\" style=\"margin: 0 auto;\">\n      <a title=\"\" class=\"post-job-btn mr-2\" (click)=\"save()\"><i class=\"la la-save\"></i>Update</a>\n      <a title=\"\" class=\"post-job-btn ml-2\" (click)=\"cancel()\"><i class=\"la la-unlink\"></i>Cancel</a>\n    </ul>\n  </div>\n</nav>\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./profile\" title=\"\"><i class=\"la la-user\"></i>Profile</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./cv-cover\" title=\"\"><i class=\"la la-file-text\"></i>CV & Cover Letter</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./resume\" title=\"\"><i class=\"la la-paper-plane\"></i>Resume</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./new-resume\" title=\"\"><i class=\"la la-paper-plane\"></i>New resume</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./applied-jobs\" title=\"\"><i class=\"la la-briefcase\"></i>Applied Jobs</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                  <a routerLink=\"./change-password\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>\n                </li>\n                <li>\n                  <a title=\"\"><i class=\"la la-unlink\" (click)=\"_auth.Logout()\"></i>Logout</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </aside>\n\n\n        <div class=\"col-lg-9 column\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CandidateDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDashboardComponent", function() { return CandidateDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");



// import {HttpClient} from '@angular/common/http';


// import {TimeInterval} from 'rxjs';
var l = console.log;
var CandidateDashboardComponent = /** @class */ (function () {
    // Class constructor and init methods
    function CandidateDashboardComponent(_ser, _route, _auth) {
        this._ser = _ser;
        this._route = _route;
        this._auth = _auth;
        this.candidateData = this._ser.candidateData;
        // console.log(this.candidateData);
    }
    CandidateDashboardComponent.prototype.save = function () {
        this._ser.saveCandidateChanges().subscribe(function (r) { return console.log(r); }, function (e) { return console.log(e); });
    };
    CandidateDashboardComponent.prototype.cancel = function () {
        console.log(this.candidateData);
    };
    CandidateDashboardComponent.prototype.ngOnInit = function () {
        // console.log(!this._ser.candidateData['accountId'], localStorage.getItem('accountId'), this.candidateData._id);
        var _this = this;
        if (!this._ser.candidateData['accountId'] || localStorage.getItem('accountId') != this.candidateData.accountId) {
            this._route.params.subscribe(function (p) {
                _this.candidateId = p._id;
                _this._ser.getCurrentCandidateData(_this.candidateId).subscribe(function (d) {
                    // console.log(d, d['information'].gender === undefined, '----- init candidateData -----');
                    if (d['information'].gender === undefined) {
                        _this.candidateData.information.name = d['information'].name;
                        _this.candidateData.information.email = d['information'].email;
                        _this.candidateData.information.mobile = d['information'].mobile;
                        _this.candidateData.accountId = d['accountId'];
                        _this.candidateData.candidateId = d['candidateId'];
                        _this.candidateData._id = d['_id'];
                        _this._ser.candidateData = _this.candidateData;
                        // console.log(this.candidateData, '----- init candidateData _id -----');
                    }
                    else {
                        // this.candidateData = d;
                        _this._ser.candidateData = d;
                        _this.candidateData = _this._ser.candidateData;
                        // console.log(this.candidateData, this._ser.candidateData);
                    }
                    console.log(_this.candidateData.information.gender);
                    if (_this.candidateData.profile.profileImage === 'default_profile_picture.jpg'
                        && _this.candidateData.information.gender == false) {
                        _this._ser.candidateData['profile'].profileImage = 'default_female_profile_picture.png';
                        _this.candidateData['profile'].profileImage = 'default_female_profile_picture.png';
                    }
                    if (_this.candidateData.profile.profileImage === 'default_female_profile_picture.png'
                        && _this.candidateData.information.gender == true) {
                        _this._ser.candidateData['profile'].profileImage = 'default_profile_picture.jpg';
                        _this.candidateData['profile'].profileImage = 'default_profile_picture.jpg';
                    }
                    _this.candidateData.education.university.sort(function (a, b) { return +b.startYear - +a.startYear; });
                    _this.candidateData.experience.workExperience.sort(function (a, b) { return +/\d+/.exec(b.startDate) - +/\d+/.exec(a.startDate); });
                    _this.candidateData.experience.skills.sort(function (a, b) { return +b.percentage - +a.percentage; });
                }, function (e) { return console.log(e); });
            });
        }
    };
    CandidateDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-dashboard',
            template: __webpack_require__(/*! ./candidate-dashboard.component.html */ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./candidate-dashboard.component.css */ "./src/app/candidate/dashboard/candidate-dashboard/candidate-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CandidateDashboardComponent);
    return CandidateDashboardComponent;
}());



/***/ }),

/***/ "./src/app/candidate/search/ca-operations/ca-operations.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/search/ca-operations/ca-operations.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9zZWFyY2gvY2Etb3BlcmF0aW9ucy9jYS1vcGVyYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/search/ca-operations/ca-operations.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/candidate/search/ca-operations/ca-operations.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div class=\"parallax scrolly-invisible no-parallax\"\n         data-velocity=\"-.1\"\n         style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"></div>\n    <!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome to Candidates search</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block remove-bottom\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <aside class=\"col-lg-3 column\">\n          <div class=\"widget\">\n            <div class=\"search_widget_job\">\n              <div class=\"field_w_search\">\n                <input type=\"text\" placeholder=\"Search Keywords\"/>\n                <i class=\"la la-search\"></i>\n              </div><!-- Search Widget -->\n              <div class=\"field_w_search\">\n                <input type=\"text\" placeholder=\"All Locations\"/>\n                <i class=\"la la-map-marker\"></i>\n              </div><!-- Search Widget -->\n            </div>\n          </div>\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title open\">Last Activity</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox\">-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"22\"><label for=\"22\">Last Hour</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"23\"><label for=\"23\">Last 24 hours</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"24\"><label for=\"24\">Last 7 days</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"25\"><label for=\"25\">Last 14 days</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"26\"><label for=\"26\">Last 30 days</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"27\"><label for=\"27\">All</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title open\">Specialism</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox scrollbar\">-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"as\"><label for=\"as\">Accountancy (2)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"asd\"><label for=\"asd\">Banking (2)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"errwe\"><label for=\"errwe\">Charity & Voluntary (3)</label>-->\n          <!--</p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"fdg\"><label for=\"fdg\">Digital & Creative (4)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"sc\"><label for=\"sc\">Estate Agency (3)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"aw\"><label for=\"aw\">Graduate (2)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"ui\"><label for=\"ui\">IT Contractor (7)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"saas\"><label for=\"saas\">Charity & Voluntary (3)</label>-->\n          <!--</p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"rrrt\"><label for=\"rrrt\">Digital & Creative (4)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"eweew\"><label for=\"eweew\">Estate Agency (3)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"bnbn\"><label for=\"bnbn\">Graduate (2)</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"spealism\" id=\"ffd\"><label for=\"ffd\">IT Contractor (7)</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title open\">Offerd Salary</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox\">-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"1\"><label for=\"1\">10k - 20k</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"2\"><label for=\"2\">20k - 30k</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"3\"><label for=\"3\">30k - 40k</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"4\"><label for=\"4\">40k - 50k</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"28\"><label for=\"28\">50k - 60k</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"29\"><label for=\"29\">60k - 70k</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title closed\">Career Level</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox\">-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"5\"><label for=\"5\">Intermediate</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"6\"><label for=\"6\">Normal</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"7\"><label for=\"7\">Special</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"8\"><label for=\"8\">Experienced</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title closed\">Experince</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox\">-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"9\"><label for=\"9\">1Year to 2Year</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"10\"><label for=\"10\">2Year to 3Year</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"11\"><label for=\"11\">3Year to 4Year</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"12\"><label for=\"12\">4Year to 5Year</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"widget\">-->\n          <!--<h3 class=\"sb-title closed\">Gender</h3>-->\n          <!--<div class=\"specialism_widget\">-->\n          <!--<div class=\"simple-checkbox\">-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"13\"><label for=\"13\">Male</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"14\"><label for=\"14\">Female</label></p>-->\n          <!--<p><input type=\"checkbox\" name=\"smplechk\" id=\"15\"><label for=\"15\">Others</label></p>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--</div>-->\n        </aside>\n        <div class=\"col-lg-9 column\">\n          <div class=\"emply-resume-sec\" *ngFor=\"let candidate of candidates\">\n            <a routerLink=\"./{{candidate._id}}\" title=\"\">\n              <div class=\"emply-resume-list square\">\n                <div class=\"emply-resume-thumb\">\n                  <img src=\"http://localhost:3000/upload/{{candidate.profile.profileImage}}\" alt=\"\"/>\n                </div>\n                <div class=\"emply-resume-info\">\n                  <h3><a title=\"\">{{candidate.information.name.first | titlecase}} {{candidate.information.name.last | titlecase}}</a>\n                  </h3>\n                  <span><i>{{candidate.experience.jobTitle | titlecase}}</i> at {{candidate.experience.workExperience[candidate.experience.workExperience.length - 1].companyName | titlecase}}</span>\n                  <p><i class=\"la la-map-marker\"></i>{{candidate.information.address.country}}\n                    / {{candidate.information.address.state | titlecase}}</p>\n                </div>\n                <!--<div class=\"shortlists\">-->\n                <!--<a routerLink=\"./{{candidate._id}}\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n              </div>\n            </a>\n          </div><!-- Emply List -->\n\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err2.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err3.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err4.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err5.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err6.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err7.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err8.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n          <!--<div class=\"emply-resume-list square\">-->\n          <!--<div class=\"emply-resume-thumb\">-->\n          <!--<img src=\"assets/images/resource/err9.jpg\" alt=\"\"/>-->\n          <!--</div>-->\n          <!--<div class=\"emply-resume-info\">-->\n          <!--<h3><a href=\"#\" title=\"\">Ali TUFAN</a></h3>-->\n          <!--<span><i>UX / UI Designer</i> at Atract Solutions</span>-->\n          <!--<p><i class=\"la la-map-marker\"></i>Istanbul / Turkey</p>-->\n          <!--</div>-->\n          <!--<div class=\"shortlists\">-->\n          <!--<a href=\"#\" title=\"\">Shortlist <i class=\"la la-plus\"></i></a>-->\n          <!--</div>-->\n          <!--</div>&lt;!&ndash; Emply List &ndash;&gt;-->\n\n          <!--<div class=\"pagination\">-->\n          <!--<ul>-->\n          <!--<li class=\"prev\"><a href=\"#\"><i class=\"la la-long-arrow-left\"></i> Prev</a></li>-->\n          <!--<li><a href=\"#\">1</a></li>-->\n          <!--<li class=\"active\"><a href=\"#\">2</a></li>-->\n          <!--<li><a href=\"#\">3</a></li>-->\n          <!--<li><span class=\"delimeter\">...</span></li>-->\n          <!--<li><a href=\"#\">14</a></li>-->\n          <!--<li class=\"next\"><a href=\"#\">Next <i class=\"la la-long-arrow-right\"></i></a></li>-->\n          <!--</ul>-->\n          <!--</div>&lt;!&ndash; Pagination &ndash;&gt;-->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/candidate/search/ca-operations/ca-operations.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/candidate/search/ca-operations/ca-operations.component.ts ***!
  \***************************************************************************/
/*! exports provided: CaOperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaOperationsComponent", function() { return CaOperationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");



var l = console.log;
var CaOperationsComponent = /** @class */ (function () {
    function CaOperationsComponent(_ser) {
        var _this = this;
        this._ser = _ser;
        console.log(this.candidates);
        if (!this.candidates) {
            this._ser.getAllCandidates().subscribe(function (d) {
                _this.candidates = d;
                _this.candidates.forEach(function (v, i) {
                    _this.candidates[i].information.address.country = v.information.address.country.replace(/\d+_/, '');
                    _this.candidates[i].information.address.state = v.information.address.state.replace(/\d+_/, '');
                    // this.candidates[i].information.name.first = v.information.name.first.replace(/\b./g, l => l.toUpperCase());
                    // this.candidates[i].information.name.last = v.information.name.last.replace(/\b./g, l => l.toUpperCase());
                });
                return console.log(d);
            }, function (e) { return console.log(e); });
            // _ser.getAllCandidates().subscribe(d => {
            //   console.log(this.candidates, d);
            //   return this.candidates = d;
            // }, e => console.log(e));
        }
    }
    CaOperationsComponent.prototype.ngOnInit = function () {
    };
    CaOperationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-operations',
            template: __webpack_require__(/*! ./ca-operations.component.html */ "./src/app/candidate/search/ca-operations/ca-operations.component.html"),
            styles: [__webpack_require__(/*! ./ca-operations.component.css */ "./src/app/candidate/search/ca-operations/ca-operations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"]])
    ], CaOperationsComponent);
    return CaOperationsComponent;
}());



/***/ }),

/***/ "./src/app/candidate/search/ca-profile/ca-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/candidate/search/ca-profile/ca-profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS9zZWFyY2gvY2EtcHJvZmlsZS9jYS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/candidate/search/ca-profile/ca-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/candidate/search/ca-profile/ca-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div class=\"parallax scrolly-invisible no-parallax\"\n         data-velocity=\"-.1\"\n         style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"></div>\n    <!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"skills-btn\">\n                    <a *ngFor=\"let skill of candidate.experience.skills\" href=\"#\" title=\"\">{{skill.title}}</a>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"action-inner\">\n                    <a href=\"#\" title=\"\"><i class=\"la la-download\"></i>Download CV</a>\n                    <!--la-paper-plane-->\n                    <a href=\"mailto:{{candidate.information.email}}\" title=\"\"><i\n                      class=\"la la-envelope-o\"></i>Contact {{candidate.information.name.first | titlecase}}</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"overlape\">\n  <div class=\"block remove-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"cand-single-user\">\n            <div class=\"share-bar circle\">\n\n              <a *ngIf=\"candidate.information.socialMedia.website\" [href]=\"candidate.information.socialMedia.website\"\n                 target=\"_blank\" title=\"\" class=\"share-website\">\n                <i class=\"fa fa-internet-explorer\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.github\" [href]=\"candidate.information.socialMedia.github\"\n                 target=\"_blank\" title=\"\" class=\"share-github\">\n                <i class=\"fa fa-github\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.linkedIn\" [href]=\"candidate.information.socialMedia.linkedIn\"\n                 target=\"_blank\" title=\"\" class=\"share-linkedin\">\n                <i class=\"fa fa-linkedin\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.stackOverflow\"\n                 [href]=\"candidate.information.socialMedia.stackOverflow\" target=\"_blank\" title=\"\"\n                 class=\"share-stackOverflow\">\n                <i class=\"fa fa-stack-overflow\"></i></a>\n\n              <br>\n\n              <a *ngIf=\"candidate.information.socialMedia.googlePlus\"\n                 [href]=\"candidate.information.socialMedia.googlePlus\" target=\"_blank\" title=\"\" class=\"share-google\">\n                <i class=\"la la-google\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.youtube\" [href]=\"candidate.information.socialMedia.youtube\"\n                 target=\"_blank\" title=\"\" class=\"share-youtube\">\n                <i class=\"fa fa-youtube\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.facebook\" [href]=\"candidate.information.socialMedia.facebook\"\n                 target=\"_blank\" title=\"\" class=\"share-fb\">\n                <i class=\"fa fa-facebook\"></i></a>\n\n              <a *ngIf=\"candidate.information.socialMedia.twitter\" [href]=\"candidate.information.socialMedia.twitter\"\n                 target=\"_blank\" title=\"\" class=\"share-twitter\">\n                <i class=\"fa fa-twitter\"></i></a>\n\n            </div>\n            <div class=\"can-detail-s\">\n              <div class=\"cst\"><img src=\"http://localhost:3000/upload/{{candidate.profile.profileImage}}\" alt=\"\"/></div>\n              <h3>{{candidate.information.name.first | titlecase}} {{candidate.information.name.last | titlecase}}</h3>\n              <span><i>{{candidate.experience.jobTitle | titlecase}}</i> at {{candidate.experience.workExperience[candidate.experience.workExperience.length - 1].companyName | titlecase}}</span>\n              <!--<p><a href=\"https://grandetest.com/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"85e6f7e0e4f1ecf3e0e9e4fce0f7f6b5bdbdc5e2e8e4ece9abe6eae8\">[email&#160;protected]</a></p>-->\n\n              <!--<p><a href=\"mailto:{{candidate.information.email}}\">{{candidate.information.email}}</a></p>-->\n\n              <!--<p>Member Since, 2017</p>-->\n              <p><i class=\"la la-map-marker\"></i>\n                {{candidate.information.address.country}} / {{candidate.information.address.state | titlecase}}\n              </p>\n            </div>\n            <div class=\"download-cv\">\n              <a routerLink=\"./dashboard\" title=\"\"><i class=\"la la-edit la-2x\"></i><i class=\"h4\">Dashboard</i></a>\n            </div>\n          </div>\n          <!--<ul class=\"cand-extralink\">-->\n          <!--<li><a href=\"#about\" title=\"\">About</a></li>-->\n          <!--<li><a href=\"#education\" title=\"\">Education</a></li>-->\n          <!--<li><a href=\"#experience\" title=\"\">Work Experience</a></li>-->\n          <!--<li><a href=\"#portfolio\" title=\"\">Portfolio</a></li>-->\n          <!--<li><a href=\"#skills\" title=\"\">Professional Skills</a></li>-->\n          <!--<li><a href=\"#awards\" title=\"\">Awards</a></li>-->\n          <!--</ul>-->\n          <div class=\"cand-details-sec\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 column\">\n                <div class=\"cand-details\" id=\"about\">\n                  <h2>About</h2>\n                  <p>{{candidate.profile.description}}</p>\n                  <div class=\"edu-history-sec\" id=\"education\">\n                    <h2>Education</h2>\n                    <div class=\"edu-history\" *ngFor=\"let edu of candidate.education.university\">\n                      <i class=\"la la-graduation-cap\"></i>\n                      <div class=\"edu-hisinfo\">\n                        <h3>{{edu.educationType}}</h3>\n                        <i>{{edu.startYear}} - {{edu.endYear || 'Present'}}</i>\n                        <span>{{edu.degreeType}} <i>in </i> {{edu.field}} <i>form </i> {{edu.institute}} </span>\n                        <p>{{edu.description}}</p>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"edu-history-sec\" id=\"experience\">\n                    <h2>Work & Experience</h2>\n                    <div class=\"edu-history style2\" *ngFor=\"let work of candidate.experience.workExperience\">\n                      <i></i>\n                      <div class=\"edu-hisinfo\">\n                        <h3>{{work.jobTitle}} <span>{{work.companyName}}</span></h3>\n                        <i>{{work.startDate}} - {{work.endDate || 'Present'}}</i>\n                        <p>{{work.jobDescription}}</p>\n                      </div>\n                    </div>\n\n                  </div>\n                  <div class=\"mini-portfolio\" id=\"portfolio\">\n                    <h2>Portfolio</h2>\n                    <div class=\"mp-row\">\n                      <div class=\"mp-col\" *ngFor=\"let portfolio of candidate.profile.portfolio\">\n                        <div class=\"mportolio\"><img src=\"http://localhost:3000/upload/{{portfolio.image}}\" alt=\"\"/><a\n                          href=\"#\" title=\"\"><i class=\"la la-search\"></i></a></div>\n                        <h6>{{portfolio.title}}</h6>\n                      </div>\n\n                    </div>\n                  </div>\n                  <div class=\"progress-sec\" id=\"skills\">\n                    <h2>Professional Skills</h2>\n                    <div class=\"progress-sec\" *ngFor=\"let skill of candidate.experience.skills\">\n                      <span>{{skill.title}}</span>\n                      <div class=\"progressbar\">\n                        <div class=\"progress\" [style.width.%]=\"skill.percentage\"><span>{{skill.percentage}}%</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 column\">\n                <div class=\"job-overview\">\n                  <h3>Overview</h3>\n                  <ul>\n                    <li *ngIf=\"candidate.profile.currentSalary.viewState\">\n                      <i class=\"la la-money\"></i>\n                      <h3>Current Salary</h3><span>\n                        {{candidate.profile.currentSalary.salary}}</span></li>\n\n                    <li *ngIf=\"candidate.profile.expectedSalary.viewState\">\n                      <i class=\"la la-money\"></i>\n                      <h3>Expected Salary</h3>\n                      <span>{{candidate.profile.expectedSalary.salary}}</span></li>\n\n                    <li><i class=\"la la-mars-double\"></i>\n                      <h3>Gender</h3><span>\n                        {{candidate.information.gender ? 'Male' : 'Female'}}</span></li>\n\n                    <li><i class=\"la la-thumb-tack\"></i>\n                      <h3>Career Level</h3><span>{{candidate.experience.careerLevel}}</span></li>\n                    <!--<li><i class=\"la la-puzzle-piece\"></i>-->\n                    <!--<h3>Industry</h3><span>Management</span></li>-->\n                    <li><i class=\"la la-shield\"></i>\n                      <h3>Experience</h3><span>{{candidate.experience.yearsOfExperience}} year(s)</span></li>\n                    <li><i class=\"la la-line-chart \"></i>\n                      <h3>Qualification</h3><span>{{candidate.education.educationLevel}}</span></li>\n                  </ul>\n                </div><!-- Job Overview -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/candidate/search/ca-profile/ca-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/candidate/search/ca-profile/ca-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: CaProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaProfileComponent", function() { return CaProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CaProfileComponent = /** @class */ (function () {
    function CaProfileComponent(_ser, _router) {
        var _this = this;
        this._ser = _ser;
        this._router = _router;
        this._router.params.subscribe(function (p) {
            _this._ser.getCurrentCandidateData(p._id).subscribe(function (d) {
                console.log(_this.candidate);
                _this.candidate = d;
                _this.candidate.information.address.country = _this.candidate.information.address.country.replace(/\d+_/, '');
                _this.candidate.information.address.state = _this.candidate.information.address.state.replace(/\d+_/, '');
            }, function (e) { return console.log(e); });
        });
    }
    CaProfileComponent.prototype.ngOnInit = function () {
    };
    CaProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ca-profile',
            template: __webpack_require__(/*! ./ca-profile.component.html */ "./src/app/candidate/search/ca-profile/ca-profile.component.html"),
            styles: [__webpack_require__(/*! ./ca-profile.component.css */ "./src/app/candidate/search/ca-profile/ca-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["CandidateDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CaProfileComponent);
    return CaProfileComponent;
}());



/***/ }),

/***/ "./src/app/categories/category.service.ts":
/*!************************************************!*\
  !*** ./src/app/categories/category.service.ts ***!
  \************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.burl = 'http://localhost:3000/categories/';
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.burl + 'all');
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/employer/dashboard/em-change-password/em-change-password.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-change-password/em-change-password.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Rhc2hib2FyZC9lbS1jaGFuZ2UtcGFzc3dvcmQvZW0tY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/dashboard/em-change-password/em-change-password.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-change-password/em-change-password.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n     class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome Tera Planer</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <!-- <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Company Profile</a>\n                  <ul>\n                    <ol><a href=\"#\" title=\"\">My Profile</a></ol>\n                    <ol><a href=\"#\" title=\"\">Social Network</a></ol>\n                    <ol><a href=\"#\" title=\"\">Contact Information</a></ol>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-briefcase\"></i>Manage Jobs</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-money\"></i>Transactions</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-paper-plane\"></i>Resumes</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-user\"></i>Packages</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Post a New Job</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-flash\"></i>Job Alerts</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>\n              </ul>\n            </div>\n\n          </div>\n        </aside> -->\n        <div class=\"col-lg-9 column\">\n            <div class=\"padding-left\">\n              <div class=\"manage-jobs-sec\">\n                <h3>Change Password</h3>\n                <div class=\"change-password\">\n                  <form class=\"needs-validation\"  (submit)=\"savePass()\"   #passForm=\"ngForm\" novalidate>\n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                        <span *ngIf=\"passForm.submitted && passForm.valid\" class=\"text-success\">{{updatedMsg}}</span>\n                        <span class=\"pf-title\">Old Password</span>\n                        <div class=\"pf-field\">\n                          <input type=\"password\" name=\"password\" [(ngModel)]=\"oldpass\" (keyup)=\"checkpassword()\" />\n                          <span class=\"text-danger\">{{errorMsg}}</span>\n                        </div>\n                        <span class=\"pf-title\">New Password</span>\n                        <div class=\"pf-field\">\n                          <input type=\"password\" name=\"newpass\" [(ngModel)]=\"newpass\" />\n                        </div>\n                        <span class=\"pf-title\">Confirm Password</span>\n                        <div class=\"pf-field\">\n                          <input type=\"password\" name=\"confirmnewpass\" [(ngModel)]=\"confirmpass\" />\n                          <span class=\"text-danger\">{{errorConfirmMsg}}</span>\n                        </div>\n                        <button type=\"submit\">Update</button>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <i class=\"la la-key big-icon\"></i>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/dashboard/em-change-password/em-change-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-change-password/em-change-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmChangePasswordComponent", function() { return EmChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../employer.service */ "./src/app/employer/employer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmChangePasswordComponent = /** @class */ (function () {
    function EmChangePasswordComponent(empService, actRouter) {
        this.empService = empService;
        this.actRouter = actRouter;
        this.emp = {};
        this.oldpass = "";
        this.newpass = "";
        this.confirmpass = "";
        this.errorMsg = "";
        this.errorConfirmMsg = "";
        this.updatedMsg = "";
    }
    EmChangePasswordComponent.prototype.savePass = function () {
        if (this.oldpass == this.emp.password && this.newpass == this.confirmpass) {
            this.emp.password = this.newpass;
            this.empService.savePassword(this.emp).subscribe(function (a) { return console.log(a); });
            this.updatedMsg = "Password updated successfully";
            this.errorMsg = this.errorConfirmMsg = null;
        }
        else if (this.oldpass != this.emp.password) {
            this.errorMsg = "Not valid password";
            this.updatedMsg = this.errorConfirmMsg = null;
        }
        else if (this.newpass != this.confirmpass) {
            this.errorConfirmMsg = "Password not matched";
            this.updatedMsg = this.errorMsg = "";
        }
    };
    EmChangePasswordComponent.prototype.getEmployerPassword = function (id) {
        var _this = this;
        this.empService
            .getEmployerPass(id)
            .subscribe(function (a) { return (_this.emp = a); }, function (e) { return console.log(e); });
    };
    EmChangePasswordComponent.prototype.checkpassword = function () {
        if (this.oldpass != this.emp.password) {
            this.errorMsg = "Not valid password";
        }
        else {
            this.errorMsg = "";
        }
    };
    EmChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRouter.params.subscribe(function (a) { return _this.id = a['id']; });
        this.getEmployerPassword(this.id);
    };
    EmChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-change-password',
            template: __webpack_require__(/*! ./em-change-password.component.html */ "./src/app/employer/dashboard/em-change-password/em-change-password.component.html"),
            styles: [__webpack_require__(/*! ./em-change-password.component.css */ "./src/app/employer/dashboard/em-change-password/em-change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employer_service__WEBPACK_IMPORTED_MODULE_2__["EmployerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmChangePasswordComponent);
    return EmChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-db-profile/em-db-profile.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Rhc2hib2FyZC9lbS1kYi1wcm9maWxlL2VtLWRiLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-db-profile/em-db-profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome Tera Planer {{id}} and {{secificData?.hr?.name.first}} </h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <!-- <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/profile/',id]\" title=\"\"><i class=\"la la-file-text\"></i>Company\n                    Profile</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/dashboard/job-manager/',id]\" title=\"\"><i class=\"la la-briefcase\"></i>Manage\n                    Jobs</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/jobs/creatjob']\" title=\"\"><i class=\"la la-file-text\"></i>Post\n                    a New Job</a>\n                </li>\n\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/dashboard/change-password/',id]\" title=\"\"><i class=\"la la-lock\"></i>Change\n                    Password</a>\n                </li>\n                <li><a title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </aside> -->\n        <div class=\"col-lg-9 column\">\n          <div class=\"padding-left\">\n            <div class=\"profile-title\" id=\"mp\">\n              <h3>My Profile</h3>\n              <div class=\"upload-img-bar\">\n                <span><img alt=\"\" src=\"assets/images/resource/up1.jpg\"/><i>x</i></span>\n                <div class=\"upload-info\">\n                  {{secificData.employerImege}}\n                  <input [(ngModel)]=\"secificData.employerImege\" [uploader]=\"uploader\" multiple name=\"fileUpload\"\n                         ng2FileSelect\n                         type=\"file\"/>\n                  <div *ngFor=\"let item of uploader.queue\">\n                    <button (click)=\"item.upload()\" class=\"btn btn-dark\" type=\"button\">upload</button>\n                    <button (click)=\"item.remove()\" class=\"btn btn-danger\" type=\"button\">delete</button>\n                  </div>\n                  <span>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit ml-2\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">Company Name</span>\n                  <div class=\"pf-field\">\n                    <!-- company : {{secificData?.employer?.name.first}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.name.first\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\">Since</span>\n                  <div class=\"pf-field\">\n                    <input placeholder=\"1991\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\">Team Size</span>\n                  <div class=\"pf-field\">\n                    <input placeholder=\"100 - 201\" type=\"text\"/>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                  <span class=\"pf-title\">Description</span>\n                  <!-- {{secificData.description}} -->\n                  <div class=\"pf-field\">\n                    <textarea [(ngModel)]=\"secificData.description\">{{secificData.description}}</textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit ml-2\">\n              <h3>Hr information</h3>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">First Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.hr?.name.first\" placeholder=\"{{secificData?.hr?.name.first}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">middle Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.hr?.name.middle\" placeholder=\"{{secificData?.hr?.name.middle}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">last Name</span>\n                  <div class=\"pf-field\">\n                    <!-- {{secificData?.hr?.name.last}} -->\n                    <input [(ngModel)]=\"secificData?.hr?.name.last\" placeholder=\"{{secificData?.hr?.name.last}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">mobile</span>\n                  <div *ngIf=\"secificData?.hr\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.hr.mobile\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">Gender</span>\n                  <div *ngIf=\"secificData?.hr\" class=\"pf-field\">\n                    <select [(ngModel)]=\"secificData?.hr.gender\">\n                      <option value=\"true\">Male</option>\n                      <option value=\"false\">Female</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit ml-2\">\n              <h3>Manger information</h3>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">First Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.manager?.name.first\"\n                           placeholder=\"{{secificData?.manager?.name.first}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">middle Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.manager?.name.middle\"\n                           placeholder=\"{{secificData?.manager?.name.middle}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">last Name</span>\n                  <div class=\"pf-field\">\n                    <!-- {{secificData?.hr?.name.last}} -->\n                    <input [(ngModel)]=\"secificData?.manager?.name.last\"\n                           placeholder=\"{{secificData?.manager?.name.last}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">mobile</span>\n                  <div *ngIf=\"secificData?.manager\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.manager.mobile\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-5\">\n                  <div class=\"form-group\">\n                    <span class=\"pf-title\">Gender</span>\n                    <div *ngIf=\"secificData?.manager\" class=\"pf-field\">\n                      <select [(ngModel)]=\"secificData?.manager.gender\" class=\"form-control\">\n                        <option value=\"true\">Male</option>\n                        <option value=\"false\">Female</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">Email</span>\n                  <div *ngIf=\"secificData?.manager\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.manager.email\" type=\"text\"/>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">National Id</span>\n                  <div *ngIf=\"secificData?.manager\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.manager.nationalId\" type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit ml-2\">\n              <h3>Employer information</h3>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">First Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.name.first\"\n                           placeholder=\"{{secificData?.employer?.name.first}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">middle Name</span>\n                  <div class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.name.middle\"\n                           placeholder=\"{{secificData?.employer?.name.middle}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <span class=\"pf-title\">last Name</span>\n                  <div class=\"pf-field\">\n                    <!-- {{secificData?.hr?.name.last}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.name.last\"\n                           placeholder=\"{{secificData?.employer?.name.last}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">Email</span>\n                  <div *ngIf=\"secificData?.employer\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer.email\" type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-5\">\n                  <span class=\"pf-title\">website</span>\n                  <div *ngIf=\"secificData?.employer\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer.website\" type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\"> country</span>\n                  <div *ngIf=\"secificData?.employer?.address\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.address.country\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\"> city</span>\n                  <div *ngIf=\"secificData?.employer?.address\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.address.city\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\"> district</span>\n                  <div *ngIf=\"secificData?.employer?.address\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.address.district\" type=\"text\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <span class=\"pf-title\"> street</span>\n                  <div *ngIf=\"secificData?.employer?.address\" class=\"pf-field\">\n                    <input [(ngModel)]=\"secificData?.employer?.address.street\" type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit ml-2\" id=\"sn\">\n              <h3>Social Edit</h3>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">Facebook</span>\n                  <div *ngIf=\"secificData?.employer\" class=\"pf-field\">\n                    <!-- d {{secificData?.socialMedia?.data?.facebook}} -->\n                    <!-- f: {{secificData?.employer?.socialMedia.facebook}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.socialMedia.facebook\" type=\"text\"/>\n                    <i class=\"fa fa-facebook\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">linkedIn</span>\n                  <div *ngIf=\"secificData?.employer?.socialMedia\" class=\"pf-field\">\n                    <!-- t: {{secificData?.employer?.socialMedia.linkedIn}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.socialMedia.linkedIn\"\n                           placeholder=\"{{secificData?.employer?.socialMedia.linkedIn}}\"\n                           type=\"text\"/>\n                    <i class=\"fa fa-linkedin\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">Google</span>\n                  <div *ngIf=\"secificData?.employer?.socialMedia\" class=\"pf-field\">\n                    <!-- g: {{secificData?.employer?.socialMedia.googlePlus}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.socialMedia.googlePlus\"\n                           placeholder=\"{{secificData?.employer?.socialMedia.googlePlus}}\"\n                           type=\"text\"/>\n                    <!-- <i class=\"la la-google\"></i> -->\n                    <i class=\"fa fa-google-plus\"></i>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"profile-form-edit ml-2\">\n              <h3>Contact</h3>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">Phone Number</span>\n                  <div class=\"pf-field\">\n                    <!-- mobile : {{secificData?.employer?.phoneNumber[0]}} -->\n                    <input [(ngModel)]=\"secificData?.employer?.phoneNumber[0]\"\n                           placeholder=\"{{secificData?.employer?.phoneNumber[0]}}\"\n                           type=\"text\"/>\n                  </div>\n                </div>\n              </div>\n\n              <!-- <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <span class=\"pf-title\">Email</span>\n                  <div class=\"pf-field\">\n                    <input type=\"text\" placeholder=\"{{secificData?.employer?.email}}\" [(ngModel)]='secificData?.employer.email'/>\n                  </div>\n                </div>\n              </div> -->\n              <div class=\"col-lg-12\">\n                <button (click)=\"sendUpdateDataForServer()\" class=\"btn btn-lg btn-outline-danger\" type=\"submit\">Update\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-db-profile/em-db-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmDbProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmDbProfileComponent", function() { return EmDbProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../employer.service */ "./src/app/employer/employer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var uri = 'http://localhost:3000/employers/upload';
var EmDbProfileComponent = /** @class */ (function () {
    // location: Location
    function EmDbProfileComponent(EmployerService, actRouter, Cusrout, http) {
        var _this = this;
        this.EmployerService = EmployerService;
        this.actRouter = actRouter;
        this.Cusrout = Cusrout;
        this.http = http;
        // employerImage :string ;
        // upload file
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: uri });
        this.attat = [];
        this.test = {
            name: { first: '', middle: '', last: '' },
            socialMedia: { facebook: '', linkedIn: '', githup: '', googlePlus: '' }
        };
        // SpecFicEmployer: Employer = new Employer(0, this.test, this.test, 'mostafa yehia mostafa');
        this.secificData = {
        // employer: {
        //   name: { first: '', middle: '', last: '', },
        //   socialMedia: { facebook: 'dd', linkedIn: '', githup: '', googlePlus: '' },
        //   address: { country: 'egy', city: '', district: '', street: '', building: '' },
        //   website: '', phoneNumber: ['']
        // },
        // hr: { gender: 1, name: { first: '', middle: '', last: '', } },
        // manager: { gender: 1, name: { first: '', middle: '', last: '', } },
        };
        this.updateData = {};
        this.burl = 'http://localhost:3000/employers/upload';
        // console.log('dataaaaaaaaaaaaaaaaaaaaaaaa' + this.uploader)
        this.uploader.onCompleteItem = function (item, response, status, header) {
            _this.attat.push(JSON.parse(response));
        };
    }
    // const uri = 'http://localhost:4200/employers/upload';
    EmDbProfileComponent.prototype.getDataForEmployer = function () {
        var _this = this;
        this.EmployerService.getSpecificEmployer(this.id).subscribe(function (employerRes) {
            console.log(employerRes);
            _this.secificData = employerRes;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.Cusrout.navigate(['/login']);
                }
            }
        });
    };
    EmDbProfileComponent.prototype.sendUpdateDataForServer = function () {
        // alert('Sendeddd' + this.secificData);
        // console.log(this.secificData);
        // this.Cusrout.navigate(['/employers/dashboard/profile/'+this.id])
        this.EmployerService.updataEmploye(this.id, this.secificData).subscribe(function (resu) {
            console.log(resu);
        });
        // console.log('Doneeeeeeeee')
        // location.reload()
        this.Cusrout.navigate(['/employers/profile/' + this.id]);
    };
    EmDbProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRouter.params.subscribe(function (a) { return _this.id = a['id']; });
        this.getDataForEmployer();
    };
    EmDbProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-db-profile',
            template: __webpack_require__(/*! ./em-db-profile.component.html */ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.html"),
            styles: [__webpack_require__(/*! ./em-db-profile.component.css */ "./src/app/employer/dashboard/em-db-profile/em-db-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employer_service__WEBPACK_IMPORTED_MODULE_2__["EmployerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmDbProfileComponent);
    return EmDbProfileComponent;
}());



/***/ }),

/***/ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-job-manager/em-job-manager.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Rhc2hib2FyZC9lbS1qb2ItbWFuYWdlci9lbS1qb2ItbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-job-manager/em-job-manager.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome Tera Planer</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <!-- <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/profile/',id]\" title=\"\"><i class=\"la la-file-text\"></i>Company Profile</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/dashboard/job-manager/',id]\" title=\"\"><i class=\"la la-briefcase\"></i>Manage\n                    Jobs</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/jobs/creatjob']\" title=\"\"><i class=\"la la-file-text\"></i>Post a New Job</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>\n                </li>\n                <li><a href=\"#\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </aside> -->\n        <div class=\"col-lg-9 column\">\n          <div class=\"padding-left\">\n            <div class=\"manage-jobs-sec\">\n              <h3>Manage Jobs</h3>\n              <div class=\"extra-job-info\">\n                <span><i class=\"la la-clock-o\"></i><strong>9</strong> Job Posted</span>\n                <span><i class=\"la la-file-text\"></i><strong>20</strong> Application</span>\n                <span><i class=\"la la-users\"></i><strong>18</strong> Active Jobs</span>\n              </div>\n              <table>\n                <thead>\n                  <tr>\n                    <td>Title</td>\n                    <td>Applications</td>\n                    <td>Created & Expired</td>\n                    <td>Status</td>\n                    <td>Action</td>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let job of allJobs\">\n                    <td>\n                      <div class=\"table-list-title\">\n                        <h3><a [routerLink]=\"['/jobs/search/single',job.jobId]\">{{job.details.title}}</a></h3>\n                      </div>\n                    </td>\n                    <td>\n                      <span class=\"applied-field\">3+ Applied</span>\n                    </td>\n                    <td>\n                      <span>{{job.details.publishDate | date}}</span><br />\n                      <span>{{job.details.expireDate | date}}</span>\n                    </td>\n                    <td>\n                      <span class=\"status active\">Active</span>\n                    </td>\n                    <td>\n                      <ul class=\"action_job\">\n                        <li><span>View Job</span><a [routerLink]=\"['/jobs/search/single',job.jobId]\" title=\"\"><i class=\"la la-eye\"></i></a></li>\n                        <li><span>Edit</span><a [routerLink]=\"['/employers/jobs/edit/',job.jobId]\" title=\"\"><i class=\"la la-pencil\"></i></a></li>\n                        <li><span>Delete</span><a class=\"btn\" role=\"button\" (click)=deleteJob(job.jobId) title=\"\"><i class=\"la la-trash-o\"></i></a></li>\n                      </ul>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-job-manager/em-job-manager.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmJobManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmJobManagerComponent", function() { return EmJobManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_job_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/job/job.service */ "./src/app/job/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmJobManagerComponent = /** @class */ (function () {
    function EmJobManagerComponent(jobService, actRouter, rout) {
        this.jobService = jobService;
        this.actRouter = actRouter;
        this.rout = rout;
    }
    EmJobManagerComponent.prototype.getEmoployerJobs = function () {
        var _this = this;
        this.jobService.getAllJobsEm(this.id).subscribe(function (res) {
            _this.allJobs = res;
            console.log(res);
        });
    };
    EmJobManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRouter.params.subscribe(function (res) { return _this.id = res['id']; });
        console.log("id is " + this.id);
        this.getEmoployerJobs();
    };
    EmJobManagerComponent.prototype.deleteJob = function (id) {
        this.jobService.deleteJob(id);
        this.getEmoployerJobs();
    };
    EmJobManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-job-manager',
            template: __webpack_require__(/*! ./em-job-manager.component.html */ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.html"),
            styles: [__webpack_require__(/*! ./em-job-manager.component.css */ "./src/app/employer/dashboard/em-job-manager/em-job-manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_job_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmJobManagerComponent);
    return EmJobManagerComponent;
}());



/***/ }),

/***/ "./src/app/employer/dashboard/em-post-new/em-post-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-post-new/em-post-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Rhc2hib2FyZC9lbS1wb3N0LW5ldy9lbS1wb3N0LW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/dashboard/em-post-new/em-post-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-post-new/em-post-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome Tera Planer</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Company Profile</a>\n                  <ul>\n                    <ol><a href=\"#\" title=\"\">My Profile</a></ol>\n                    <ol><a href=\"#\" title=\"\">Social Network</a></ol>\n                    <ol><a href=\"#\" title=\"\">Contact Information</a></ol>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-briefcase\"></i>Manage Jobs</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-money\"></i>Transactions</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-paper-plane\"></i>Resumes</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-user\"></i>Packages</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Post a New Job</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-flash\"></i>Job Alerts</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </aside>\n        <div class=\"col-lg-9 column\">\n          <div class=\"padding-left\">\n            <div class=\"profile-title\">\n              <h3>Post a New Job</h3>\n              <div class=\"steps-sec\">\n                <div class=\"step active\">\n                  <p><i class=\"la la-info\"></i></p>\n                  <span>Information</span>\n                </div>\n                <div class=\"step\">\n                  <p><i class=\"la la-cc-mastercard\"></i></p>\n                  <span>Package & Payments</span>\n                </div>\n                <div class=\"step\">\n                  <p><i class=\"la  la-check-circle\"></i></p>\n                  <span>Done</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-form-edit\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Job Title</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"Designer\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Description</span>\n                    <div class=\"pf-field\">\n                      <textarea>Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Email</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Username</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Job Type</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Categories</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Offerd Salary</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Career Level</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Experience</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Gender</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Industry</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Qualification</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Application Deadline Date</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"01.11.207\" class=\"form-control datepicker\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Skill Requirments</span>\n                    <div class=\"pf-field\">\n                      <ul class=\"tags\">\n                        <li class=\"addedTag\">Photoshop<span onclick=\"$(this).parent().remove();\" class=\"tagRemove\">x</span><input\n                            type=\"hidden\" name=\"tags[]\" value=\"Web Deisgn\"></li>\n                        <li class=\"tagAdd taglist\">\n                          <input type=\"text\" id=\"search-field\">\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Country</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">City</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Complete Address</span>\n                    <div class=\"pf-field\">\n                      <textarea>Collins Street West, Victoria 8007, Australia.</textarea>\n                    </div>\n                  </div>\n\n                </div>\n              </form>\n            </div>\n            <div class=\"contact-edit\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Find On Map</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"Collins Street West, Victoria 8007, Australia.\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <span class=\"pf-title\">Latitude</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"41.1589654\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <span class=\"pf-title\">Longitude</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"21.1589654\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <a href=\"#\" title=\"\" class=\"srch-lctn\">Search Location</a>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Maps</span>\n                    <div class=\"pf-map\">\n                      <div id=\"map_div\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <button type=\"submit\">Next</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/dashboard/em-post-new/em-post-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employer/dashboard/em-post-new/em-post-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmPostNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmPostNewComponent", function() { return EmPostNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmPostNewComponent = /** @class */ (function () {
    function EmPostNewComponent() {
    }
    EmPostNewComponent.prototype.ngOnInit = function () {
    };
    EmPostNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-post-new',
            template: __webpack_require__(/*! ./em-post-new.component.html */ "./src/app/employer/dashboard/em-post-new/em-post-new.component.html"),
            styles: [__webpack_require__(/*! ./em-post-new.component.css */ "./src/app/employer/dashboard/em-post-new/em-post-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmPostNewComponent);
    return EmPostNewComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/employer/employer-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: EmployerFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFilterPipe", function() { return EmployerFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployerFilterPipe = /** @class */ (function () {
    function EmployerFilterPipe() {
    }
    EmployerFilterPipe.prototype.transform = function (employers, searchItem) {
        if (!employers || !searchItem) {
            return employers;
        }
        return employers.filter(function (employerRes) { return employerRes.employer.name.first.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1; });
    };
    EmployerFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'employerFilter'
        })
    ], EmployerFilterPipe);
    return EmployerFilterPipe;
}());



/***/ }),

/***/ "./src/app/employer/employer-locationfilter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/employer/employer-locationfilter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: EmployerLocationfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerLocationfilterPipe", function() { return EmployerLocationfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployerLocationfilterPipe = /** @class */ (function () {
    function EmployerLocationfilterPipe() {
    }
    EmployerLocationfilterPipe.prototype.transform = function (employers, searchItem) {
        if (!employers || !searchItem) {
            return employers;
        }
        return employers.filter(function (employerRes) { return employerRes.employer.address.city.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1; });
    };
    EmployerLocationfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'employerLocationfilter'
        })
    ], EmployerLocationfilterPipe);
    return EmployerLocationfilterPipe;
}());



/***/ }),

/***/ "./src/app/employer/employer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employer/employer.service.ts ***!
  \**********************************************/
/*! exports provided: EmployerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerService", function() { return EmployerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployerService = /** @class */ (function () {
    function EmployerService(http) {
        this.http = http;
        this.burl = "http://localhost:3000/employers/";
    }
    EmployerService.prototype.getAllEmployer = function () {
        return this.http.get(this.burl + "all");
    };
    EmployerService.prototype.getSpecificEmployer = function (id) {
        return this.http.get(this.burl + "getSpecficEmployer/" + id);
    };
    EmployerService.prototype.updataEmploye = function (empId, employer) {
        return this.http.post(this.burl + "edit/" + empId, employer);
    };
    EmployerService.prototype.imageUpload = function (upload) {
        return this.http.post(this.burl + 'upload', upload);
    };
    EmployerService.prototype.getEmProfile = function (id) {
        return this.http.get(this.burl + "profile/" + id);
    };
    EmployerService.prototype.savePassword = function (emp) {
        return this.http.post("http://localhost:3000/users/savepass/" + emp.accountId, emp);
    };
    EmployerService.prototype.getEmployerPass = function (id) {
        return this.http.get("http://localhost:3000/users/getpass/" + id);
    };
    EmployerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployerService);
    return EmployerService;
}());



/***/ }),

/***/ "./src/app/employer/main-component/main-component.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/employer/main-component/main-component.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL21haW4tY29tcG9uZW50L21haW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/main-component/main-component.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/employer/main-component/main-component.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome {{name?.hr.name.first}} </h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/profile',id]\" title=\"\"><i class=\"la la-file-text\"></i>Company\n                    Profile</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/dashboard/job-manager/',id]\" title=\"\"><i class=\"la la-briefcase\"></i>Manage\n                    Jobs</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/jobs/creatjob']\" title=\"\"><i class=\"la la-file-text\"></i>Post\n                    a New Job</a>\n                </li>\n                <li class=\"inner-child\">\n                  <a [routerLink]=\"['/employers/dashboard/profile/', id]\" title=\"\"><i class=\"la la-file-text\"></i>Edit\n                    My Profile</a>\n                </li>\n\n                <li class=\"inner-child\">\n                  <a title=\"\" [routerLink]=\"['/employers/dashboard/change-password/', id]\" ><i class=\"la la-lock\"></i>Change\n                    Password</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </aside>\n        <div class=\"col-lg-9 column\">\n          <div class=\"padding-left\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/main-component/main-component.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/employer/main-component/main-component.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentComponent", function() { return MainComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employer.service */ "./src/app/employer/employer.service.ts");




var MainComponentComponent = /** @class */ (function () {
    function MainComponentComponent(activateRouter, route, employerService) {
        this.activateRouter = activateRouter;
        this.route = route;
        this.employerService = employerService;
    }
    // getSpecifEmploy() {
    //   this.employerService.getSpecificEmployer(this.id).subscribe(
    //     reslt => {this.name = reslt;
    //     console.log(reslt)},
    //     err => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401 ) {
    //           console.log(err)
    //           this.route.navigate(['/login']);
    //         }
    //       }
    //     }
    //   )
    // }
    MainComponentComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem("accountId");
        // this.getSpecifEmploy();
    };
    MainComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-component',
            template: __webpack_require__(/*! ./main-component.component.html */ "./src/app/employer/main-component/main-component.component.html"),
            styles: [__webpack_require__(/*! ./main-component.component.css */ "./src/app/employer/main-component/main-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _employer_service__WEBPACK_IMPORTED_MODULE_3__["EmployerService"]])
    ], MainComponentComponent);
    return MainComponentComponent;
}());



/***/ }),

/***/ "./src/app/employer/search/em-operations/em-operations.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/employer/search/em-operations/em-operations.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3NlYXJjaC9lbS1vcGVyYXRpb25zL2VtLW9wZXJhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/search/em-operations/em-operations.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/employer/search/em-operations/em-operations.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Employer</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block less-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <aside class=\"col-lg-3 column margin_widget\">\n          <div class=\"widget\">\n            <div class=\"search_widget_job\">\n              <div class=\"field_w_search\">\n                <input type=\"text\" placeholder=\"Company Name\" [(ngModel)]=\"serchItem\" />\n                <i class=\"la la-search\"></i>\n              </div><!-- Search Widget -->\n              <div class=\"field_w_search\">\n                <input type=\"text\" placeholder=\"Locations\" [(ngModel)]=\"searchLocation\" />\n                <i class=\"la la-map-marker\"></i>\n              </div><!-- Search Widget -->\n            </div>\n          </div>\n          <!-- <div class=\"widget border\">\n            <h3 class=\"sb-title open\">Specialism</h3>\n            <div class=\"specialism_widget\">\n              <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"as\"><label for=\"as\">Accountancy (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"asd\"><label for=\"asd\">Banking (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"errwe\"><label for=\"errwe\">Charity & Voluntary (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"fdg\"><label for=\"fdg\">Digital & Creative (4)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"sc\"><label for=\"sc\">Estate Agency (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"aw\"><label for=\"aw\">Graduate (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"ui\"><label for=\"ui\">IT Contractor (7)</label></p>\n              </div>\n            </div>\n          </div> -->\n          <!-- <div class=\"widget border\">\n            <h3 class=\"sb-title open\">Team Size</h3>\n            <div class=\"specialism_widget\">\n              <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t1\"><label for=\"t1\">1 - 10</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t2\"><label for=\"t2\">100 - 200</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t3\"><label for=\"t3\">201 - 301</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t4\"><label for=\"t4\">301 - 401</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t5\"><label for=\"t5\">401 - 501</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t6\"><label for=\"t6\">501 - 601</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"t7\"><label for=\"t7\">601 - 701</label></p>\n              </div>\n            </div>\n          </div> -->\n          <!-- <div class=\"widget border\">\n            <h3 class=\"sb-title open\">Since</h3>\n            <div class=\"range_slider\">\n              <div class=\"nstSlider\" data-range_min=\"1990\" data-range_max=\"2018\" data-cur_min=\"1991\" data-cur_max=\"2007\">\n                <div class=\"bar\"></div>\n                <div class=\"leftGrip\"></div>\n                <div class=\"rightGrip\"></div>\n              </div>\n              <div class=\"leftLabel\"></div>\n              <div class=\"rightLabel\"></div>\n            </div>\n          </div> -->\n        </aside>\n        <div class=\"col-lg-9 column\">\n          <!-- <div class=\"filterbar\">\n            <p>Total of 145 Employer</p>\n            <div class=\"sortby-sec\">\n              <span>Sort by</span>\n              <select data-placeholder=\"20 Per Page\" class=\"chosen\">\n                <option>30 Per Page</option>\n                <option>40 Per Page</option>\n                <option>50 Per Page</option>\n                <option>60 Per Page</option>\n              </select>\n            </div>\n          </div> -->\n          <!-- <div class=\"alpha-pag\">\n            <a href=\"#\" title=\"\" class=\"active\">ALL</a><a href=\"#\" title=\"\">A</a><a href=\"#\" title=\"\">B</a><a href=\"#\"\n              title=\"\">C</a><a href=\"#\" title=\"\">D</a><a href=\"#\" title=\"\">E</a><a href=\"#\" title=\"\">F</a><a href=\"#\"\n              title=\"\">G</a><a href=\"#\" title=\"\">H</a><a href=\"#\" title=\"\">I</a><a href=\"#\" title=\"\">J</a><a href=\"#\"\n              title=\"\">K</a><a href=\"#\" title=\"\">L</a><a href=\"#\" title=\"\">M</a><a href=\"#\" title=\"\">N</a><a href=\"#\"\n              title=\"\">O</a><a href=\"#\" title=\"\">P</a><a href=\"#\" title=\"\">Q</a><a href=\"#\" title=\"\">R</a><a href=\"#\"\n              title=\"\">S</a><a href=\"#\" title=\"\">T</a><a href=\"#\" title=\"\">U</a><a href=\"#\" title=\"\">V</a><a href=\"#\"\n              title=\"\">W</a><a href=\"#\" title=\"\">X</a><a href=\"#\" title=\"\">Y</a><a href=\"#\" title=\"\">Z</a>\n          </div> -->\n          <div class=\"emply-list-sec style2\">\n            <!-- /////// modify data -->\n            <div class=\"emply-list\" *ngFor=\"let item of specifiEmployer | employerFilter:serchItem  | employerLocationfilter:searchLocation \">\n              <div class=\"emply-list-thumb\">\n                <a title=\"\" (click)=\"companyFile(item.employerId)\"><img src=\"assets/images/resource/em1.jpg\" alt=\"\" /></a>\n              </div>\n              <div class=\"emply-list-info\">\n                <h3><a [routerLink]=\"['/profile/',item.employerId]\"> {{item?.employer?.name.first}}</a></h3>\n                <!-- <span>{{item.employerId}}</span> -->\n                <h6><i class=\"la la-map-marker\"></i> {{item?.employer?.address.country}} , {{item?.employer?.address.city}}</h6>\n                <p> {{item?.description}}</p>\n              </div>\n            </div><!-- Employe List -->\n            <!-- <div class=\"pagination\">\n              <ul>\n                <li class=\"prev\"><a href=\"#\"><i class=\"la la-long-arrow-left\"></i> Prev</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li class=\"active\"><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><span class=\"delimeter\">...</span></li>\n                <li><a href=\"#\">14</a></li>\n                <li class=\"next\"><a href=\"#\">Next <i class=\"la la-long-arrow-right\"></i></a></li>\n              </ul>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/search/em-operations/em-operations.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employer/search/em-operations/em-operations.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmOperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmOperationsComponent", function() { return EmOperationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../employer.service */ "./src/app/employer/employer.service.ts");




var EmOperationsComponent = /** @class */ (function () {
    function EmOperationsComponent(employerServeice, empRouter) {
        this.employerServeice = employerServeice;
        this.empRouter = empRouter;
        this.specifiEmployer = [{}];
        this.testdata = "test Data";
    }
    EmOperationsComponent.prototype.getdata = function () {
        var _this = this;
        this.employerServeice.getAllEmployer().subscribe(function (employerData) {
            _this.specifiEmployer = employerData;
            console.log(employerData);
        });
    };
    EmOperationsComponent.prototype.companyFile = function (id) {
        // alert("Doneeeeeeeeee"+id);
        this.empRouter.navigate(['/employers/profile/' + id]);
    };
    EmOperationsComponent.prototype.ngOnInit = function () {
        this.getdata();
    };
    EmOperationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-operations',
            template: __webpack_require__(/*! ./em-operations.component.html */ "./src/app/employer/search/em-operations/em-operations.component.html"),
            styles: [__webpack_require__(/*! ./em-operations.component.css */ "./src/app/employer/search/em-operations/em-operations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employer_service__WEBPACK_IMPORTED_MODULE_3__["EmployerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmOperationsComponent);
    return EmOperationsComponent;
}());



/***/ }),

/***/ "./src/app/employer/search/em-profile/em-profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employer/search/em-profile/em-profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3NlYXJjaC9lbS1wcm9maWxlL2VtLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/search/em-profile/em-profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employer/search/em-profile/em-profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"state\" class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n      class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 column\">\n          <div class=\"job-single-sec style3\">\n            <div class=\"job-head-wide\">\n              <div class=\"row\">\n                <div class=\"col-lg-10 ml-2\">\n                  <div class=\"job-single-head3 emplye\">\n                    <div class=\"job-thumb\"> <img src=\"assets/images/resource/sdf.png\" alt=\"\" /></div>\n                    <div class=\"job-single-info3\">\n                      <h3>{{specificEmployer?.employer?.name.first}}</h3>\n                      <!-- <span><i class=\"la la-map-marker\"></i>Sacramento, California</span><span class=\"job-is ft\">Full\n                        time</span> -->\n                      <!-- <ul class=\"tags-jobs\">\n                        <li><i class=\"la la-file-text\"></i> Applications 1</li>\n                        <li><i class=\"la la-calendar-o\"></i> Post Date: July 29, 2017</li>\n                        <li><i class=\"la la-eye\"></i> Views 5683</li>\n                      </ul> -->\n                    </div>\n                  </div><!-- Job Head -->\n                </div>\n                <!-- <div class=\"col-lg-2\">\n                  <div class=\"share-bar\">\n                    <a href=\"#\" title=\"\" class=\"share-google\"><i class=\"la la-google\"></i></a><a href=\"#\" title=\"\"\n                      class=\"share-fb\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" title=\"\" class=\"share-twitter\"><i\n                        class=\"fa fa-twitter\"></i></a>\n                  </div>\n                  <div class=\"emply-btns\">\n                    <a class=\"seemap\" href=\"#\" title=\"\"><i class=\"la la-map-marker\"></i> See On Map</a>\n                    <a class=\"followus\" href=\"#\" title=\"\"><i class=\"la la-paper-plane\"></i> Follow us</a>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"job-wide-devider\">\n              <div class=\"row\">\n\n                <div class=\"col-lg-8 column\">\n                  <div class=\"job-details ml-2\">\n                    <h2 class=\"text-primary\">About Company</h2>\n                    <h3>{{specificEmployer?.description}} </h3> <br />\n                  </div>\n                  <div class=\"recent-jobs ml-2\">\n                    <h2 class=\"text-primary\">Offered Jobs </h2>\n                    <div class=\"job-list-modern\" *ngFor=\"let job of allJobs\">\n                      <div class=\"job-listings-sec no-border\">\n                        <div class=\"job-listing wtabs noimg\">\n                          <div class=\"job-title-sec\">\n                            <h3><a [routerLink]=\"['/jobs/search/single',job.jobId]\" title=\"\">{{job.details.title}}</a></h3>\n                            <span>{{job.details.description}}</span>\n                            <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                          </div>\n                          <div class=\"job-style-bx\">\n                              <span class=\"job-is ft\">{{job.details.type}}</span>\n                              <i>{{job.details.publishDate | date}}</i>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"col-lg-4 column\">\n                  <div class=\"job-overview\">\n                    <h3>Company Information</h3>\n                    <ul>\n                      <li><i class=\"la la-eye\"></i>\n                        <h3>Viewed </h3><span>164</span>\n                      </li>\n                      <li><i class=\"la la-file-text\"></i>\n                        <h3>Posted Jobs</h3><span>4</span>\n                      </li>\n                      <li><i class=\"la la-map\"></i>\n                        <h3>Locations</h3><span>United States, San Diego</span>\n                      </li>\n                      <li><i class=\"la la-bars\"></i>\n                        <h3>Categories</h3><span>Arts, Design, Media</span>\n                      </li>\n                      <li><i class=\"la la-clock-o\"></i>\n                        <h3>Since</h3><span>2002</span>\n                      </li>\n                      <li><i class=\"la la-users\"></i>\n                        <h3>Team Size</h3><span>15</span>\n                      </li>\n                      <li><i class=\"la la-user\"></i>\n                        <h3>Followers</h3><span>15</span>\n                      </li>\n                    </ul>\n                  </div>\n                   <div class=\"quick-form-job\">\n                    <h3>Contact Business Network</h3>\n                    <form>\n                      <input type=\"text\" placeholder=\"Enter your Name *\" />\n                      <input type=\"text\" placeholder=\"Email Address*\" />\n                      <input type=\"text\" placeholder=\"Phone Number\" />\n                      <textarea placeholder=\"Message should have more than 50 characters\"></textarea>\n                      <button class=\"submit\">Send Email</button>\n                      <span>You accepts our <a href=\"#\" title=\"\">Terms and Conditions</a></span>\n                    </form>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/employer/search/em-profile/em-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employer/search/em-profile/em-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: EmProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmProfileComponent", function() { return EmProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../employer.service */ "./src/app/employer/employer.service.ts");
/* harmony import */ var src_app_job_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/job/job.service */ "./src/app/job/job.service.ts");





var EmProfileComponent = /** @class */ (function () {
    // test :{name:{first:"";middle:"";last:""}}
    // specificEmployer : Employer =new Employer(1,this.test,this.test);
    function EmProfileComponent(activateRouter, route, employerService, jobService) {
        this.activateRouter = activateRouter;
        this.route = route;
        this.employerService = employerService;
        this.jobService = jobService;
        this.state = false;
    }
    EmProfileComponent.prototype.getSpecifEmploy = function () {
        var _this = this;
        if (this.route.url == '/profile/' + this.id) {
            this.state = true;
            this.employerService.getEmProfile(this.id).subscribe(function (reslt) {
                _this.specificEmployer = reslt;
                console.log(reslt);
            });
        }
        else {
            this.employerService.getSpecificEmployer(this.id).subscribe(function (reslt) {
                _this.specificEmployer = reslt;
                console.log(reslt);
            });
        }
    };
    EmProfileComponent.prototype.getEmoployerJobs = function () {
        var _this = this;
        if (this.route.url == '/profile/' + this.id) {
            this.jobService.getJobsForEmp(this.id).subscribe(function (res) { return _this.allJobs = res; });
        }
        else {
            this.jobService.getAllJobsEm(this.id).subscribe(function (res) { return _this.allJobs = res; });
        }
    };
    EmProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.url);
        this.activateRouter.params.subscribe(function (a) { return _this.id = a['id']; });
        this.getSpecifEmploy();
        this.getEmoployerJobs();
    };
    EmProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-profile',
            template: __webpack_require__(/*! ./em-profile.component.html */ "./src/app/employer/search/em-profile/em-profile.component.html"),
            styles: [__webpack_require__(/*! ./em-profile.component.css */ "./src/app/employer/search/em-profile/em-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _employer_service__WEBPACK_IMPORTED_MODULE_3__["EmployerService"],
            src_app_job_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]])
    ], EmProfileComponent);
    return EmProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"block no-padding\">\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"main-featured-sec\">\n            <ul class=\"main-slider-sec text-arrows\">\n              <li class=\"slideHome\"><img src=\"assets/images/resource/mslider3.jpg\" alt=\"\" /></li>\n              <li class=\"slideHome\"><img src=\"assets/images/resource/mslider2.jpg\" alt=\"\" /></li>\n              <li class=\"slideHome\"><img src=\"assets/images/resource/mslider1.jpg\" alt=\"\" /></li>\n            </ul>\n            <div class=\"job-search-sec\">\n              <div class=\"job-search\">\n                <h3>The Easiest Way to Get Your New Job</h3>\n                <span>Find Jobs, Employment & Career Opportunities</span>\n                <form>\n                  <div class=\"row\">\n                    <div class=\"col-lg-7 col-md-5 col-sm-12 col-xs-12\">\n                      <div class=\"job-field\">\n                        <input type=\"text\" placeholder=\"Job title, keywords or company name\" />\n                        <i class=\"la la-keyboard-o\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-5 col-sm-12 col-xs-12\">\n                      <div class=\"job-field\">\n                        <select data-placeholder=\"City, province or region\" class=\"chosen-city\">\n                          <option>Istanbul</option>\n                          <option>New York</option>\n                          <option>London</option>\n                          <option>Russia</option>\n                        </select>\n                        <i class=\"la la-map-marker\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-1 col-md-2 col-sm-12 col-xs-12\">\n                      <button type=\"submit\"><i class=\"la la-search\"></i></button>\n                    </div>\n                  </div>\n                </form>\n\n                <div class=\"or-browser\">\n                  <span>Browse job offers by</span>\n                  <a href=\"#\" title=\"\">Category</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"scroll-to\">\n              <a href=\"#scroll-here\" title=\"\"><i class=\"la la-arrow-down\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"scroll-here\">\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Popular Categories</h2>\n            <span>37 jobs live - 0 added today.</span>\n          </div><!-- Heading -->\n          <div class=\"cat-sec\">\n            <div class=\"row no-gape\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-bullhorn\"></i>\n                    <span>Design, Art & Multimedia</span>\n                    <p>(22 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-graduation-cap\"></i>\n                    <span>Education Training</span>\n                    <p>(6 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-line-chart \"></i>\n                    <span>Accounting / Finance</span>\n                    <p>(3 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-users\"></i>\n                    <span>Human Resource</span>\n                    <p>(3 open positions)</p>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"cat-sec\">\n            <div class=\"row no-gape\">\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-phone\"></i>\n                    <span>Telecommunications</span>\n                    <p>(22 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-cutlery\"></i>\n                    <span>Restaurant / Food Service</span>\n                    <p>(6 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-building\"></i>\n                    <span>Construction / Facilities</span>\n                    <p>(3 open positions)</p>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"p-category\">\n                  <a href=\"#\" title=\"\">\n                    <i class=\"la la-user-md\"></i>\n                    <span>Health</span>\n                    <p>(3 open positions)</p>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <div class=\"browse-all-cat\">\n            <a href=\"#\" title=\"\">Browse All Categories</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block double-gap-top double-gap-bottom\">\n    <div data-velocity=\"-.1\" style=\"background: url('assets/images/resource/parallax1.jpg') repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible layer color\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"simple-text-block\">\n            <h3>Make a Difference with Your Online Resume!</h3>\n            <span>Your resume in minutes with JobHunt resume assistant is ready!</span>\n            <a href=\"#\" title=\"\">Create an Account</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Featured Jobs</h2>\n            <span>Leading Employers already using job and talent.</span>\n          </div><!-- Heading -->\n          <div class=\"job-listings-sec\">\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l1.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                <span>Massimo Artemisis</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is ft\">FULL TIME</span>\n            </div><!-- Job -->\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l2.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">Marketing Director</a></h3>\n                <span>Tix Dog</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Rennes, France</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is pt\">PART TIME</span>\n            </div><!-- Job -->\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l3.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">C Developer (Senior) C .Net</a></h3>\n                <span>StarHealth</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>London, United Kingdom</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is ft\">FULL TIME</span>\n            </div><!-- Job -->\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l4.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">Application Developer For Android</a></h3>\n                <span>Altes Bank</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Istanbul, Turkey</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is fl\">FREELANCE</span>\n            </div><!-- Job -->\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l5.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">Regional Sales Manager South east Asia</a></h3>\n                <span>Vincent</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Ajax, Ontario</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is tp\">TEMPORARY</span>\n            </div><!-- Job -->\n            <div class=\"job-listing\">\n              <div class=\"job-title-sec\">\n                <div class=\"c-logo\"> <img src=\"assets/images/resource/l6.png\" alt=\"\" /> </div>\n                <h3><a href=\"#\" title=\"\">Social Media and Public Relation Executive </a></h3>\n                <span>MediaLab</span>\n              </div>\n              <span class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Ankara / Turkey</span>\n              <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n              <span class=\"job-is ft\">FULL TIME</span>\n            </div><!-- Job -->\n          </div>\n        </div>\n        <div class=\"col-lg-12\">\n          <div class=\"browse-all-cat\">\n            <a href=\"#\" title=\"\">Load more listings</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div data-velocity=\"-.1\" style=\"background: url('assets/images/resource/parallax2.jpg') repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible layer color light\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading light\">\n            <h2>Kind Words From Happy Candidates</h2>\n            <span>What other people thought about the service provided by JobHunt</span>\n          </div><!-- Heading -->\n          <div class=\"reviews-sec\" id=\"reviews-carousel\">\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r1.jpg\" alt=\"\" />\n                <h3>Augusta Silva <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r2.jpg\" alt=\"\" />\n                <h3>Ali Tufan <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r1.jpg\" alt=\"\" />\n                <h3>Augusta Silva <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r2.jpg\" alt=\"\" />\n                <h3>Ali Tufan <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Companies We've Helped</h2>\n            <span>Some of the companies we've helped recruit excellent applicants over the years.</span>\n          </div><!-- Heading -->\n          <div class=\"comp-sec\">\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc1.jpg\" alt=\"\" /></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc2.jpg\" alt=\"\" /></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc3.jpg\" alt=\"\" /></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc4.jpg\" alt=\"\" /></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc5.jpg\" alt=\"\" /></a>\n            </div><!-- Client  -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Quick Career Tips</h2>\n            <span>Found by employers communicate directly with hiring managers and recruiters.</span>\n          </div><!-- Heading -->\n          <div class=\"blog-sec\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b1.jpg\" alt=\"\" /></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">Attract More Attention Sales And Profits</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b2.jpg\" alt=\"\" /></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">11 Tips to Help You Get New Clients</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b3.jpg\" alt=\"\" /></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">An Overworked Newspaper Editor</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"simple-text\">\n            <h3>Gat a question?</h3>\n            <span>We're here to help. Check out our FAQs, send us an email or call us at 1 (800) 555-5555</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<script>\n  /* Chosen v1.8.2 | (c) 2011-2017 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */\n\n  (function(){var t,e,s,i,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},o={}.hasOwnProperty;(i=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return\"OPTGROUP\"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,n,r,o;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:t.label,title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),o=[],s=0,i=(r=t.childNodes).length;s<i;s++)n=r[s],o.push(this.add_option(n,e,t.disabled));return o},t.prototype.add_option=function(t,e,s){if(\"OPTION\"===t.nodeName.toUpperCase())return\"\"!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t}()).select_to_array=function(t){var e,s,n,r,o;for(r=new i,s=0,n=(o=t.childNodes).length;s<n;s++)e=o[s],r.add_node(e);return r.parsed},e=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},this.label_click_handler=n(this.label_click_handler,this),t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\\bchosen-rtl\\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&\"\"===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},t.prototype.set_default_text=function(){return this.form_field.getAttribute(\"data-placeholder\")?this.default_text=this.form_field.getAttribute(\"data-placeholder\"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute(\"data-no_results_text\")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?\"<b class='group-name'>\"+t.group_label+\"</b>\"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},t.prototype.results_option_build=function(t){var e,s,i,n,r,o,h;for(e=\"\",h=0,n=0,r=(o=this.results_data).length;n<r&&(s=o[n],i=\"\",\"\"!==(i=s.group?this.result_add_group(s):this.result_add_option(s))&&(h++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(h>=this.max_shown_results));n++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push(\"active-result\"),!t.disabled||t.selected&&this.is_multiple||e.push(\"disabled-result\"),t.selected&&e.push(\"result-selected\"),null!=t.group_array_index&&e.push(\"group-option\"),\"\"!==t.classes&&e.push(t.classes),s=document.createElement(\"li\"),s.className=e.join(\" \"),s.style.cssText=t.style,s.setAttribute(\"data-option-array-index\",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):\"\"},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?((e=[]).push(\"group-result\"),t.classes&&e.push(t.classes),s=document.createElement(\"li\"),s.className=e.join(\" \"),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):\"\"},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,n;for(n=[],t=0,e=(s=this.results_data).length;t<e;t++)(i=s[t]).selected?n.push(i.selected=!1):n.push(void 0);return n},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(){var t,e,s,i,n,r,o,h,l,c,_,a,u,d,p;for(this.no_results_clear(),c=0,t=(o=this.get_search_text()).replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,\"\\\\$&\"),l=this.get_search_regex(t),s=0,i=(h=this.results_data).length;s<i;s++)(n=h[s]).search_match=!1,_=null,a=null,n.highlighted_html=\"\",this.include_option_in_results(n)&&(n.group&&(n.group_match=!1,n.active_options=0),null!=n.group_array_index&&this.results_data[n.group_array_index]&&(0===(_=this.results_data[n.group_array_index]).active_options&&_.search_match&&(c+=1),_.active_options+=1),p=n.group?n.label:n.text,n.group&&!this.group_search||(a=this.search_string_match(p,l),n.search_match=null!=a,n.search_match&&!n.group&&(c+=1),n.search_match?(o.length&&(u=a.index,r=p.slice(0,u),e=p.slice(u,u+o.length),d=p.slice(u+o.length),n.highlighted_html=this.escape_html(r)+\"<em>\"+this.escape_html(e)+\"</em>\"+this.escape_html(d)),null!=_&&(_.group_match=!0)):null!=n.group_array_index&&this.results_data[n.group_array_index].search_match&&(n.search_match=!0)));return this.result_clear_highlight(),c<1&&o.length?(this.update_results_content(\"\"),this.no_results(o)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return s=this.search_contains?t:\"(^|\\\\s|\\\\b)\"+t+\"[^\\\\s]*\",this.enable_split_word_search||this.search_contains||(s=\"^\"+s),e=this.case_sensitive_search?\"\":\"i\",new RegExp(s,e)},t.prototype.search_string_match=function(t,e){var s;return s=e.exec(t),!this.search_contains&&(null!=s?s[1]:void 0)&&(s.index+=1),s},t.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,t=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keydown_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),8!==s&&this.pending_backstroke&&this.clear_backstroke(),s){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},t.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+\"px\"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement(\"div\")).appendChild(t),e.innerHTML)},t.prototype.get_single_html=function(){return'<a class=\"chosen-single chosen-default\">\\n  <span>'+this.default_text+'</span>\\n  <div><b></b></div>\\n</a>\\n<div class=\"chosen-drop\">\\n  <div class=\"chosen-search\">\\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\\n  </div>\\n  <ul class=\"chosen-results\"></ul>\\n</div>'},t.prototype.get_multi_html=function(){return'<ul class=\"chosen-choices\">\\n  <li class=\"search-field\">\\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"'+this.default_text+'\" />\\n  </li>\\n</ul>\\n<div class=\"chosen-drop\">\\n  <ul class=\"chosen-results\"></ul>\\n</div>'},t.prototype.get_no_results_html=function(t){return'<li class=\"no-results\">\\n  '+this.results_none_found+\" <span>\"+this.escape_html(t)+\"</span>\\n</li>\"},t.browser_is_supported=function(){return\"Microsoft Internet Explorer\"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text=\"Select Some Options\",t.default_single_text=\"Select an Option\",t.default_no_result_text=\"No results match\",t}(),(t=jQuery).fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var n,r;r=(n=t(this)).data(\"chosen\"),\"destroy\"!==i?r instanceof s||n.data(\"chosen\",new s(this,i)):r instanceof s&&r.destroy()}):this}}),s=function(s){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,e),n.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},n.prototype.set_up_html=function(){var e,s;return(e=[\"chosen-container\"]).push(\"chosen-container-\"+(this.is_multiple?\"multi\":\"single\")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push(\"chosen-rtl\"),s={\"class\":e.join(\" \"),title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\\w]/g,\"_\")+\"_chosen\"),this.container=t(\"<div />\",s),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find(\"div.chosen-drop\").first(),this.search_field=this.container.find(\"input\").first(),this.search_results=this.container.find(\"ul.chosen-results\").first(),this.search_field_scale(),this.search_no_results=this.container.find(\"li.no-results\").first(),this.is_multiple?(this.search_choices=this.container.find(\"ul.chosen-choices\").first(),this.search_container=this.container.find(\"li.search-field\").first()):(this.search_container=this.container.find(\"div.chosen-search\").first(),this.selected_item=this.container.find(\".chosen-single\").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},n.prototype.on_ready=function(){return this.form_field_jq.trigger(\"chosen:ready\",{chosen:this})},n.prototype.register_observers=function(){return this.container.on(\"touchstart.chosen\",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on(\"touchend.chosen\",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on(\"mousedown.chosen\",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on(\"mouseup.chosen\",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on(\"mouseenter.chosen\",function(t){return function(e){t.mouse_enter(e)}}(this)),this.container.on(\"mouseleave.chosen\",function(t){return function(e){t.mouse_leave(e)}}(this)),this.search_results.on(\"mouseup.chosen\",function(t){return function(e){t.search_results_mouseup(e)}}(this)),this.search_results.on(\"mouseover.chosen\",function(t){return function(e){t.search_results_mouseover(e)}}(this)),this.search_results.on(\"mouseout.chosen\",function(t){return function(e){t.search_results_mouseout(e)}}(this)),this.search_results.on(\"mousewheel.chosen DOMMouseScroll.chosen\",function(t){return function(e){t.search_results_mousewheel(e)}}(this)),this.search_results.on(\"touchstart.chosen\",function(t){return function(e){t.search_results_touchstart(e)}}(this)),this.search_results.on(\"touchmove.chosen\",function(t){return function(e){t.search_results_touchmove(e)}}(this)),this.search_results.on(\"touchend.chosen\",function(t){return function(e){t.search_results_touchend(e)}}(this)),this.form_field_jq.on(\"chosen:updated.chosen\",function(t){return function(e){t.results_update_field(e)}}(this)),this.form_field_jq.on(\"chosen:activate.chosen\",function(t){return function(e){t.activate_field(e)}}(this)),this.form_field_jq.on(\"chosen:open.chosen\",function(t){return function(e){t.container_mousedown(e)}}(this)),this.form_field_jq.on(\"chosen:close.chosen\",function(t){return function(e){t.close_field(e)}}(this)),this.search_field.on(\"blur.chosen\",function(t){return function(e){t.input_blur(e)}}(this)),this.search_field.on(\"keyup.chosen\",function(t){return function(e){t.keyup_checker(e)}}(this)),this.search_field.on(\"keydown.chosen\",function(t){return function(e){t.keydown_checker(e)}}(this)),this.search_field.on(\"focus.chosen\",function(t){return function(e){t.input_focus(e)}}(this)),this.search_field.on(\"cut.chosen\",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.search_field.on(\"paste.chosen\",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.is_multiple?this.search_choices.on(\"click.chosen\",function(t){return function(e){t.choices_click(e)}}(this)):this.container.on(\"click.chosen\",function(t){t.preventDefault()})},n.prototype.destroy=function(){return t(this.container[0].ownerDocument).off(\"click.chosen\",this.click_test_action),this.form_field_label.length>0&&this.form_field_label.off(\"click.chosen\"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData(\"chosen\"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents(\"fieldset\").is(\":disabled\"),this.container.toggleClass(\"chosen-disabled\",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off(\"focus.chosen\",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on(\"focus.chosen\",this.activate_field)},n.prototype.container_mousedown=function(e){var s;if(!this.is_disabled)return!e||\"mousedown\"!==(s=e.type)&&\"touchstart\"!==s||this.results_showing||e.preventDefault(),null!=e&&t(e.target).hasClass(\"search-choice-close\")?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents(\"a.chosen-single\").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(\"\"),t(this.container[0].ownerDocument).on(\"click.chosen\",this.click_test_action),this.results_show()),this.activate_field())},n.prototype.container_mouseup=function(t){if(\"ABBR\"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},n.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),\"DOMMouseScroll\"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},n.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass(\"chosen-container-active\"))return this.close_field()},n.prototype.close_field=function(){return t(this.container[0].ownerDocument).off(\"click.chosen\",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass(\"chosen-container-active\"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},n.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass(\"chosen-container-active\"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(e){var s;return(s=t(e.target).closest(\".chosen-container\")).length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find(\"li.search-choice\").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass(\"chosen-container-single-nosearch\")):(this.search_field[0].readOnly=!1,this.container.removeClass(\"chosen-container-single-nosearch\"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(t){var e,s,i,n,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass(\"highlighted\"),i=parseInt(this.search_results.css(\"maxHeight\"),10),r=this.search_results.scrollTop(),n=i+r,s=this.result_highlight.position().top+this.search_results.scrollTop(),(e=s+this.result_highlight.outerHeight())>=n)return this.search_results.scrollTop(e-i>0?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass(\"highlighted\"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger(\"chosen:maxselected\",{chosen:this}),!1):(this.container.addClass(\"chosen-with-drop\"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger(\"chosen:showing_dropdown\",{chosen:this}))},n.prototype.update_results_content=function(t){return this.search_results.html(t)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass(\"chosen-with-drop\"),this.form_field_jq.trigger(\"chosen:hiding_dropdown\",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},n.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents(\"label\"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t(\"label[for='\"+this.form_field.id+\"']\")),this.form_field_label.length>0)return this.form_field_label.on(\"click.chosen\",this.label_click_handler)},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass(\"default\")):(this.search_field.val(\"\"),this.search_field.removeClass(\"default\"))},n.prototype.search_results_mouseup=function(e){var s;if((s=t(e.target).hasClass(\"active-result\")?t(e.target):t(e.target).parents(\".active-result\").first()).length)return this.result_highlight=s,this.result_select(e),this.search_field.focus()},n.prototype.search_results_mouseover=function(e){var s;if(s=t(e.target).hasClass(\"active-result\")?t(e.target):t(e.target).parents(\".active-result\").first())return this.result_do_highlight(s)},n.prototype.search_results_mouseout=function(e){if(t(e.target).hasClass(\"active-result\")||t(e.target).parents(\".active-result\").first())return this.result_clear_highlight()},n.prototype.choice_build=function(e){var s,i;return s=t(\"<li />\",{\"class\":\"search-choice\"}).html(\"<span>\"+this.choice_label(e)+\"</span>\"),e.disabled?s.addClass(\"search-choice-disabled\"):((i=t(\"<a />\",{\"class\":\"search-choice-close\",\"data-option-array-index\":e.array_index})).on(\"click.chosen\",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this)),s.append(i)),this.search_container.before(s)},n.prototype.choice_destroy_link_click=function(e){if(e.preventDefault(),e.stopPropagation(),!this.is_disabled)return this.choice_destroy(t(e.target))},n.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute(\"data-option-array-index\")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide(),t.parents(\"li\").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find(\"abbr\").remove()},n.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger(\"chosen:maxselected\",{chosen:this}),!1):(this.is_multiple?e.removeClass(\"active-result\"):this.reset_single_select_options(),e.addClass(\"result-selected\"),s=this.results_data[e[0].getAttribute(\"data-option-array-index\")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.search_field.val(\"\"),this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?this.winnow_results():(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},n.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass(\"chosen-default\"):(this.single_deselect_control_build(),this.selected_item.removeClass(\"chosen-default\")),this.selected_item.find(\"span\").html(t)},n.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find(\"abbr\").length||this.selected_item.find(\"span\").first().after('<abbr class=\"search-choice-close\"></abbr>'),this.selected_item.addClass(\"chosen-single-with-deselect\")},n.prototype.get_search_field_value=function(){return this.search_field.val()},n.prototype.get_search_text=function(){return t.trim(this.get_search_field_value())},n.prototype.escape_html=function(e){return t(\"<div/>\").text(e).html()},n.prototype.winnow_results_set_highlight=function(){var t,e;if(e=this.is_multiple?[]:this.search_results.find(\".result-selected.active-result\"),null!=(t=e.length?e.first():this.search_results.find(\".active-result\").first()))return this.result_do_highlight(t)},n.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger(\"chosen:no_results\",{chosen:this})},n.prototype.no_results_clear=function(){return this.search_results.find(\".no-results\").remove()},n.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll(\"li.active-result\").first())?this.result_do_highlight(t):void 0:this.results_show()},n.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll(\"li.active-result\")).length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},n.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find(\"a\").first()),this.clear_backstroke()):(t=this.search_container.siblings(\"li.search-choice\").last()).length&&!t.hasClass(\"search-choice-disabled\")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass(\"search-choice-focus\")):void 0},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass(\"search-choice-focus\"),this.pending_backstroke=null},n.prototype.search_field_scale=function(){var e,s,i,n,r,o,h;if(this.is_multiple){for(r={position:\"absolute\",left:\"-1000px\",top:\"-1000px\",display:\"none\",whiteSpace:\"pre\"},s=0,i=(o=[\"fontSize\",\"fontStyle\",\"fontWeight\",\"fontFamily\",\"lineHeight\",\"textTransform\",\"letterSpacing\"]).length;s<i;s++)r[n=o[s]]=this.search_field.css(n);return(e=t(\"<div />\").css(r)).text(this.get_search_field_value()),t(\"body\").append(e),h=e.width()+25,e.remove(),this.container.is(\":visible\")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},n.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger(\"input\",t),this.form_field_jq.trigger(\"change\",t)},n}()}).call(this);\n\n\n  $(\".chosen\").chosen({disable_search_threshold: 10});\n  $(\".chosen-city\").chosen({disable_search_threshold: 10});\n</script>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/job/create-job/create-job.component.css":
/*!*********************************************************!*\
  !*** ./src/app/job/create-job/create-job.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9jcmVhdGUtam9iL2NyZWF0ZS1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job/create-job/create-job.component.html":
/*!**********************************************************!*\
  !*** ./src/app/job/create-job/create-job.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\"\n     class=\"parallax scrolly-invisible no-parallax\"></div>\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>Welcome Tera Planer</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n<section>\n  <div class=\"block no-padding\">\n    <div class=\"container\">\n      <div class=\"row no-gape\">\n        <!-- <aside class=\"col-lg-3 column border-right\">\n          <div class=\"widget\">\n            <div class=\"tree_widget-sec\">\n              <ul>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Company Profile</a>\n                  <ul>\n                    <ol><a href=\"#\" title=\"\">My Profile</a></ol>\n                    <ol><a href=\"#\" title=\"\">Social Network</a></ol>\n                    <ol><a href=\"#\" title=\"\">Contact Information</a></ol>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-briefcase\"></i>Manage Jobs</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-money\"></i>Transactions</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-paper-plane\"></i>Resumes</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-user\"></i>Packages</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-file-text\"></i>Post a New Job</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-flash\"></i>Job Alerts</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li class=\"inner-child\">\n                  <a href=\"#\" title=\"\"><i class=\"la la-lock\"></i>Change Password</a>\n                  <ul>\n                    <li><a href=\"#\" title=\"\">My Profile</a></li>\n                    <li><a href=\"#\" title=\"\">Social Network</a></li>\n                    <li><a href=\"#\" title=\"\">Contact Information</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\" title=\"\"><i class=\"la la-unlink\"></i>Logout</a></li>\n              </ul>\n            </div>\n          </div>\n        </aside> -->\n        <div class=\"col-lg-9 column\">\n          <div class=\"padding-left\">\n            <div class=\"profile-title\">\n              <h3>{{ editMode ? 'Update Job':'Add Job'}}</h3>\n              <!-- <div class=\"steps-sec\">\n                <div class=\"step active\">\n                  <p><i class=\"la la-info\"></i></p>\n                  <span>Information</span>\n                </div>\n                <div class=\"step\">\n                  <p><i class=\"la la-cc-mastercard\"></i></p>\n                  <span>Package & Payments</span>\n                </div>\n                <div class=\"step\">\n                  <p><i class=\"la  la-check-circle\"></i></p>\n                  <span>Done</span>\n                </div>\n              </div> -->\n            </div>\n            <div class=\"profile-form-edit\">\n              <form (ngSubmit)=\"onSubmitJob(jobfrm)\" #jobfrm=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Job Title</span>\n                    <div class=\"pf-field\">\n                      <input name=\"title\" required #title=\"ngModel\" ngModel\n                       [class.is-invalid]=\"title.invalid && title.touched\" type=\"text\"  />\n                       <small class=\"text-danger\" [class.d-none]=\"title.valid || title.untouched\" >name is required</small>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Description</span>\n                    <div class=\"pf-field\">\n                      <textarea  required #desc=\"ngModel\"  [class.is-invalid]=\"desc.invalid && desc.touched\"name=\"description\" ngModel></textarea>\n                      <small class=\"text-danger\" [class.d-none]=\"desc.valid || desc.untouched\" >Description is required</small>\n                    </div>\n\n                  </div>\n                  <div class=\"col-lg-6\">\n                   <div class=\"form-group\">\n                    <span class=\"pf-title\">Job Type</span>\n                    <div class=\"pf-field\">\n                      <select name=\"type\" [(ngModel)]=\"jobType\" class=\"form-control\">\n                        <option value=\"Full Time\" >Full Time</option>\n                        <option value=\"Part Time\">Part Time</option>\n                      </select>\n                    </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                    <span class=\"pf-title\">Categories</span>\n                      <select [(ngModel)]=\"category\" name=\"Category\" class=\"form-control\">\n                          <option *ngFor=\"let item of categories\" [value]=\"item.categoryId\"> {{item.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                    <span class=\"pf-title\">Offerd Salary</span>\n                        <input ngModel name=\"salary\" required #salary=\"ngModel\"  [class.is-invalid]=\"salary.invalid && salary.touched\" class=\"form-control\" type=\"number\"/>\n                        <small class=\"text-danger\" [class.d-none]=\"salary.valid || salary.untouched\" >Salary is required</small>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 \">\n                      <div class=\"form-group\">\n                          <span class=\"pf-title\">Salary State</span>\n                          <select [(ngModel)]=\"state\" name=\"state\"class=\"form-control\">\n                            <option value=\"true\">show</option>\n                            <option value=\"false\">confidential</option>\n                          </select>\n                        </div>\n                    </div>\n                  <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                          <span class=\"pf-title\">Carear Level</span>\n                          <select [(ngModel)]=\"level\" name=\"level\"class=\"form-control\">\n                            <option>Entry Level</option>\n                            <option>junior</option>\n                            <option>senior</option>\n                          </select>\n                        </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                      <div class=\"form-group\">\n                          <span class=\"pf-title\">Offerd position</span>\n                              <input ngModel name=\"position\" required #position=\"ngModel\"  [class.is-invalid]=\"position.invalid && position.touched\" class=\"form-control\" type=\"number\"/>\n                              <small class=\"text-danger\" [class.d-none]=\"position.valid || position.untouched\" >position offered is  required</small>\n                          </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Application Deadline Date</span>\n                    <div class=\"pf-field\">\n                        <input ngModel name=\"date\"id=\"date\" type=\"date\" required #date=\"ngModel\"  [class.is-invalid]=\"date.invalid && date.touched\" >\n                        <small class=\"text-danger\" [class.d-none]=\"date.valid || date.untouched\" >date is required</small>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Skill Requirments</span>\n                    <div class=\"pf-field\">\n                        <input ngModel name=\"skill\" required #skill=\"ngModel\"\n                        [class.is-invalid]=\"skill.invalid && skill.touched\" type=\"text\"  />\n                        <small class=\"text-danger\" [class.d-none]=\"skill.valid || skill.untouched\" >skills is required</small>\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Country</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">City</span>\n                    <div class=\"pf-field\">\n                      <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n                        <option>Web Development</option>\n                        <option>Web Designing</option>\n                        <option>Art & Culture</option>\n                        <option>Reading & Writing</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Complete Address</span>\n                    <div class=\"pf-field\">\n                      <textarea>Collins Street West, Victoria 8007, Australia.</textarea>\n                    </div>\n                  </div> -->\n                  <div class=\"col-lg-12 mb-3\">\n                      <button type=\"submit\" >{{ editMode ? 'Update Job':'Add Job'}}</button>\n                    </div>\n                </div>\n              </form>\n            </div>\n            <!-- <div class=\"contact-edit\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <span class=\"pf-title\">Find On Map</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"Collins Street West, Victoria 8007, Australia.\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <span class=\"pf-title\">Latitude</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"41.1589654\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <span class=\"pf-title\">Longitude</span>\n                    <div class=\"pf-field\">\n                      <input type=\"text\" placeholder=\"21.1589654\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <a href=\"#\" title=\"\" class=\"srch-lctn\">Search Location</a>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <span class=\"pf-title\">Maps</span>\n                    <div class=\"pf-map\">\n                      <div id=\"map_div\"></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <button type=\"submit\"></button>\n                  </div>\n                </div>\n              </form>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/job/create-job/create-job.component.ts":
/*!********************************************************!*\
  !*** ./src/app/job/create-job/create-job.component.ts ***!
  \********************************************************/
/*! exports provided: CreateJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateJobComponent", function() { return CreateJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../job.service */ "./src/app/job/job.service.ts");






var CreateJobComponent = /** @class */ (function () {
    function CreateJobComponent(route, jobService, categoryService, paramroute) {
        this.route = route;
        this.jobService = jobService;
        this.categoryService = categoryService;
        this.paramroute = paramroute;
        this.jobType = 'Full Time';
        this.category = 1;
        this.state = 'true';
        this.level = 'Entry Level';
        this.editMode = false;
    }
    CreateJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramroute.params.subscribe(function (a) {
            if (a['jobId'] !== undefined) {
                _this.editMode = true;
                console.log(a['jobId']);
                _this.id = a['jobId'];
                _this.jobService.getJobById(a['jobId']).subscribe(function (job) {
                    _this.job = job;
                    console.log(job);
                    var date = new Date(_this.job.job.details.expireDate);
                    _this.pform.setValue({
                        title: _this.job.job.details.title,
                        description: _this.job.job.details.description,
                        type: _this.job.job.details.type,
                        Category: _this.job.job.details.categories,
                        salary: _this.job.job.details.offeredSalary.salary,
                        state: _this.job.job.details.offeredSalary.offeredSalaryState,
                        level: _this.job.job.details.level,
                        date: date.getFullYear() + '-' + ((date.getMonth() + 1 > 9 ?
                            date.getMonth() + 1 : '0' + (date.getMonth() + 1))) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()),
                        skill: _this.job.job.details.skills.join(' '),
                        position: _this.job.job.details.offeredJobs
                    });
                });
            }
        });
        this.categoryService.getCategories().subscribe(function (a) { return _this.categories = a; });
    };
    CreateJobComponent.prototype.onSubmitJob = function (form) {
        if (form.invalid) {
            return;
        }
        if (this.editMode) {
            this.jobService.updateJob(form.value, this.id);
            // console.log(form.value, this.id);
        }
        else {
            var info = { job: form.value, empid: localStorage.getItem("accountId") };
            this.jobService.addJob(info);
        }
        this.editMode = false;
        this.route.navigate(['/employers/dashboard/job-manager/', localStorage.getItem("accountId")]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jobfrm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CreateJobComponent.prototype, "pform", void 0);
    CreateJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-job',
            template: __webpack_require__(/*! ./create-job.component.html */ "./src/app/job/create-job/create-job.component.html"),
            styles: [__webpack_require__(/*! ./create-job.component.css */ "./src/app/job/create-job/create-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"],
            _categories_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateJobComponent);
    return CreateJobComponent;
}());



/***/ }),

/***/ "./src/app/job/filter.pipe.ts":
/*!************************************!*\
  !*** ./src/app/job/filter.pipe.ts ***!
  \************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items || !searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return (it.details.title.toLowerCase() && it.details.title.toLowerCase().indexOf(searchText)) !== -1;
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/job/job.service.ts":
/*!************************************!*\
  !*** ./src/app/job/job.service.ts ***!
  \************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.jobs = [];
        this.jobsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.burl = 'http://localhost:3000/jobs/';
    }
    JobService.prototype.getAllJobs = function () {
        var _this = this;
        this.http.get(this.burl + 'all')
            .subscribe(function (data) {
            _this.jobs = data;
            _this.jobsUpdated.next(_this.jobs.slice());
        });
    };
    JobService.prototype.getJobUpdateListener = function () {
        return this.jobsUpdated.asObservable();
    };
    // jobs for Employers
    JobService.prototype.addJob = function (job) {
        var _this = this;
        console.log(job);
        this.http.post(this.burl + 'add', job).subscribe(function (a) {
            _this.jobs.push(a);
            _this.jobsUpdated.next(_this.jobs.slice());
        });
    };
    JobService.prototype.getJobById = function (id) {
        return this.http.get(this.burl + id);
    };
    JobService.prototype.getAllJobsEm = function (id) {
        return this.http.get(this.burl + "employerJobs/" + id);
    };
    JobService.prototype.updateJob = function (job, jobId) {
        var _this = this;
        var newjob = job;
        this.http.post(this.burl + '/edit/' + jobId, newjob).subscribe(function (data) {
            console.log(data);
            var updatedJobs = _this.jobs.slice();
            console.log(updatedJobs);
            var oldJobIndex = updatedJobs.findIndex(function (p) { return p.jobId == jobId; });
            updatedJobs[oldJobIndex] = data[0];
            _this.jobs = updatedJobs;
            _this.jobsUpdated.next(_this.jobs.slice());
        });
    };
    JobService.prototype.getJobsForEmp = function (id) {
        return this.http.get(this.burl + "listJobs/" + id);
    };
    JobService.prototype.deleteJob = function (jobId) {
        var _this = this;
        this.http
            .get(this.burl + 'delete/' + jobId)
            .subscribe(function () {
            var updatedJobs = _this.jobs.filter(function (p) { return p.jobId != jobId; });
            _this.jobs = updatedJobs;
            _this.jobsUpdated.next(_this.jobs.slice());
        });
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/job/search/jb-grid/jb-grid.component.css":
/*!**********************************************************!*\
  !*** ./src/app/job/search/jb-grid/jb-grid.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9zZWFyY2gvamItZ3JpZC9qYi1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job/search/jb-grid/jb-grid.component.html":
/*!***********************************************************!*\
  !*** ./src/app/job/search/jb-grid/jb-grid.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header wform\">\n            <div class=\"job-search-sec\">\n              <div class=\"job-search\">\n                <h4>Explore Thousand Of Jobs With Just Simple Search...</h4>\n                <form>\n                  <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                      <div class=\"job-field\">\n                        <input type=\"text\" placeholder=\"Job title, keywords or company name\" />\n                        <i class=\"la la-keyboard-o\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"job-field\">\n                        <select data-placeholder=\"City, province or region\" class=\"chosen-city\">\n                          <option>Instambul</option>\n                          <option>New York</option>\n                          <option>London</option>\n                          <option>Russia</option>\n                        </select>\n                        <i class=\"la la-map-marker\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-1\">\n                      <button type=\"submit\"><i class=\"la la-search\"></i></button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n       <div class=\"row\">\n         <div class=\"col-lg-12\">\n           <span class=\"emlthis\"><a href=\"https://grandetest.com/cdn-cgi/l/email-protection#d6b3aeb7bba6bab3f8b5b9bb\" title=\"\"><i class=\"la la-envelope-o\"></i> Email me Jobs Like These</a></span>\n           <div class=\"filterbar\">\n             <h5>{{jobs?.length}} Jobs & Vacancies</h5>\n             <div class=\"sortby-sec\">\n               <span>Sort by</span>\n               <select data-placeholder=\"Most Recent\" class=\"chosen\">\n                <option>Most Recent</option>\n                <option>Most Recent</option>\n                <option>Most Recent</option>\n                <option>Most Recent</option>\n              </select>\n              <select data-placeholder=\"20 Per Page\" class=\"chosen\">\n                <option>30 Per Page</option>\n                <option>40 Per Page</option>\n                <option>50 Per Page</option>\n                <option>60 Per Page</option>\n              </select>\n             </div>\n           </div>\n           <div class=\"job-grid-sec\">\n            <div *ngIf=\"jobs\" class=\"row\">\n              <div *ngFor=\"let job of jobs  | filter : searchText; let i = index\" class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg1.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">{{job.details.title}}</a></h3>\n                    <span>{{job.details.description}}</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  [routerLink]=\"['/routePath']\" routerLinkActive=\"router-link-active\"  title=\"\">view more</a>\n                </div><!-- JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg2.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Marketing Director</a></h3>\n                    <span>Massimo Artemisis</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg3.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Application Developer For Android</a></h3>\n                    <span>Altes Bank</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg4.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>Massimo Artemisis</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg5.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>MediaLab</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg6.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>StarHealth</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg7.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>Massimo Artemisis</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div><JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg8.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>MediaLab</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div>JOB Grid -->\n              <!-- </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"job-grid border\">\n                  <div class=\"job-title-sec\">\n                    <div class=\"c-logo\"> <img src=\"assets/images/resource/jg9.png\" alt=\"\" /> </div>\n                    <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                    <span>StarHealth</span>\n                    <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  </div>\n                  <span class=\"job-lctn\">Sacramento, California</span>\n                  <a  href=\"#\" title=\"\">APPLY NOW</a>\n                </div> JOB Grid -->\n              </div>\n            </div>\n          </div>\n          <div class=\"pagination\">\n            <ul>\n              <li class=\"prev\"><a href=\"#\"><i class=\"la la-long-arrow-left\"></i> Prev</a></li>\n              <li><a href=\"#\">1</a></li>\n              <li class=\"active\"><a href=\"#\">2</a></li>\n              <li><a href=\"#\">3</a></li>\n              <li><span class=\"delimeter\">...</span></li>\n              <li><a href=\"#\">14</a></li>\n              <li class=\"next\"><a href=\"#\">Next <i class=\"la la-long-arrow-right\"></i></a></li>\n            </ul>\n          </div><!-- Pagination -->\n         </div>\n       </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/job/search/jb-grid/jb-grid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/job/search/jb-grid/jb-grid.component.ts ***!
  \*********************************************************/
/*! exports provided: JbGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbGridComponent", function() { return JbGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../job.service */ "./src/app/job/job.service.ts");




var JbGridComponent = /** @class */ (function () {
    function JbGridComponent(route, jobService) {
        this.route = route;
        this.jobService = jobService;
        this.searchText = '';
    }
    JbGridComponent.prototype.ngOnInit = function () {
        // this.jobService.getAllJobs().subscribe(
        //   a => {
        //        // console.log(a);
        //        this.jobs = a;
        //        console.log(this.jobs);
        //   });
    };
    JbGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jb-grid',
            template: __webpack_require__(/*! ./jb-grid.component.html */ "./src/app/job/search/jb-grid/jb-grid.component.html"),
            styles: [__webpack_require__(/*! ./jb-grid.component.css */ "./src/app/job/search/jb-grid/jb-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], JbGridComponent);
    return JbGridComponent;
}());



/***/ }),

/***/ "./src/app/job/search/jb-list/jb-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/job/search/jb-list/jb-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9zZWFyY2gvamItbGlzdC9qYi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job/search/jb-list/jb-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/job/search/jb-list/jb-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header wform\">\n            <div class=\"job-search-sec\">\n              <div class=\"job-search\">\n                <h4>Explore Thousand Of Jobs With Just Simple Search...</h4>\n                <form>\n                  <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                      <div class=\"job-field\">\n                        <input type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Job title, keywords or company name\" />\n                        <i class=\"la la-keyboard-o\"></i>\n                      </div>\n                    </div>\n                    <!-- <div class=\"col-lg-4\">\n                      <div class=\"job-field\">\n                        <select data-placeholder=\"City, province or region\" class=\"chosen-city\">\n                          <option>Instambul</option>\n                          <option>New York</option>\n                          <option>London</option>\n                          <option>Russia</option>\n                        </select>\n                        <i class=\"la la-map-marker\"></i>\n                      </div>\n                    </div> -->\n                    <!-- <div class=\"col-lg-1\">\n                      <button type=\"submit\"><i class=\"la la-search\"></i></button>\n                    </div> -->\n                  </div>\n                </form>\n                <!-- <div class=\"tags-bar\">\n                   <span>Full Time<i class=\"close-tag\">x</i></span>\n                   <span>UX/UI Design<i class=\"close-tag\">x</i></span>\n                   <span>Istanbul<i class=\"close-tag\">x</i></span>\n                   <div class=\"action-tags\">\n                     <a href=\"#\" title=\"\"><i class=\"la la-cloud-download\"></i> Save</a>\n                     <a href=\"#\" title=\"\"><i class=\"la la-trash-o\"></i> Clean</a>\n                   </div>\n                 </div>Tags Bar -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block remove-top\">\n    <div class=\"container\">\n       <div class=\"row no-gape\">\n         <!-- <aside class=\"col-lg-3 column\"> -->\n           <!-- <div class=\"widget border\">\n             <h3 class=\"sb-title open\">Date Posted</h3>\n             <div class=\"posted_widget\">\n              <input type=\"radio\" name=\"choose\" id=\"232\"><label for=\"232\">Last Hour</label><br />\n              <input type=\"radio\" name=\"choose\" id=\"wwqe\"><label for=\"wwqe\">Last 24 hours</label><br />\n              <input type=\"radio\" name=\"choose\" id=\"erewr\"><label for=\"erewr\">Last 7 days</label><br />\n              <input type=\"radio\" name=\"choose\" id=\"qwe\"><label for=\"qwe\">Last 14 days</label><br />\n              <input type=\"radio\" name=\"choose\" id=\"wqe\"><label for=\"wqe\">Last 30 days</label><br />\n              <input type=\"radio\" name=\"choose\" id=\"qweqw\"><label class=\"nm\" for=\"qweqw\">All</label><br />\n             </div>\n           </div>\n           <div class=\"widget border\">\n             <h3 class=\"sb-title open\">Job Type</h3>\n             <div class=\"type_widget\">\n              <p class=\"flchek\"><input type=\"checkbox\" name=\"choosetype\" id=\"33r\"><label for=\"33r\">Freelance (9)</label></p>\n              <p class=\"ftchek\"><input type=\"checkbox\" name=\"choosetype\" id=\"dsf\"><label for=\"dsf\">Full Time (8)</label></p>\n              <p class=\"ischek\"><input type=\"checkbox\" name=\"choosetype\" id=\"sdd\"><label for=\"sdd\">Internship (8)</label></p>\n              <p class=\"ptchek\"><input type=\"checkbox\" name=\"choosetype\" id=\"sadd\"><label for=\"sadd\">Part Time (5)</label></p>\n              <p class=\"tpchek\"><input type=\"checkbox\" name=\"choosetype\" id=\"assa\"><label for=\"assa\">Temporary (5)</label></p>\n              <p class=\"vtchek\"><input type=\"checkbox\" name=\"choosetype\" id=\"ghgf\"><label for=\"ghgf\">Volunteer (8)</label></p>\n             </div>\n           </div> -->\n           <!-- <div class=\"widget border\">\n             <h3 class=\"sb-title open\">Specialism</h3>\n             <div class=\"specialism_widget\">\n              <div class=\"field_w_search\">\n                 <input type=\"text\" placeholder=\"Search Spaecialisms\" />\n               </div> Search Widget -->\n               <!-- <div class=\"simple-checkbox scrollbar\">\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"as\"><label for=\"as\">Accountancy (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"asd\"><label for=\"asd\">Banking (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"errwe\"><label for=\"errwe\">Charity & Voluntary (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"fdg\"><label for=\"fdg\">Digital & Creative (4)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"sc\"><label for=\"sc\">Estate Agency (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"aw\"><label for=\"aw\">Graduate (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"ui\"><label for=\"ui\">IT Contractor (7)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"saas\"><label for=\"saas\">Charity & Voluntary (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"rrrt\"><label for=\"rrrt\">Digital & Creative (4)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"eweew\"><label for=\"eweew\">Estate Agency (3)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"bnbn\"><label for=\"bnbn\">Graduate (2)</label></p>\n                <p><input type=\"checkbox\" name=\"spealism\" id=\"ffd\"><label for=\"ffd\">IT Contractor (7)</label></p>\n               </div>\n             </div>\n           </div>\n           <!-- <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Offerd Salary</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"1\"><label for=\"1\">10k - 20k</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"2\"><label for=\"2\">20k - 30k</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"3\"><label for=\"3\">30k - 40k</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"4\"><label for=\"4\">40k - 50k</label></p>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Career Level</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"5\"><label for=\"5\">Intermediate</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"6\"><label for=\"6\">Normal</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"7\"><label for=\"7\">Special</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"8\"><label for=\"8\">Experienced</label></p>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Experince</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"9\"><label for=\"9\">1Year to 2Year</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"10\"><label for=\"10\">2Year to 3Year</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"11\"><label for=\"11\">3Year to 4Year</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"12\"><label for=\"12\">4Year to 5Year</label></p>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Gender</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"13\"><label for=\"13\">Male</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"14\"><label for=\"14\">Female</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"15\"><label for=\"15\">Others</label></p>\n               </div>\n             </div>\n           </div>\n           <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Industry</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"16\"><label for=\"16\">Meezan Job</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"17\"><label for=\"17\">Speicalize Jobs</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"18\"><label for=\"18\">Business Jobs</label></p>\n               </div>\n             </div>\n           </div> -->\n           <!-- <div class=\"widget border\">\n             <h3 class=\"sb-title closed\">Qualification</h3>\n             <div class=\"specialism_widget\">\n               <div class=\"simple-checkbox\">\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"19\"><label for=\"19\">Matriculation</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"20\"><label for=\"20\">Intermidiate</label></p>\n                <p><input type=\"checkbox\" name=\"smplechk\" id=\"21\"><label for=\"21\">Gradute</label></p>\n               </div>\n             </div>\n           </div> -->\n           <!-- <div class=\"banner_widget\">\n             <a href=\"#\" title=\"\"><img src=\"assets/images/resource/banner.png\" alt=\"\" /></a>\n          </div> -->\n         <!-- </aside>  -->\n         <div class=\"col-lg-9 column\">\n           <div class=\"modrn-joblist np\">\n             <div class=\"filterbar\">\n               <!-- <span class=\"emlthis\"><a href=\"https://grandetest.com/cdn-cgi/l/email-protection#e88d90898598848dc68b8785\" title=\"\"><i class=\"la la-envelope-o\"></i> Email me Jobs Like These</a></span> -->\n               <!-- <div class=\"sortby-sec\">\n                 <span>Sort by</span>\n                 <select data-placeholder=\"Most Recent\" class=\"chosen\">\n                  <option>Most Recent</option>\n                  <option>Most Recent</option>\n                  <option>Most Recent</option>\n                  <option>Most Recent</option>\n                </select>\n                <select data-placeholder=\"20 Per Page\" class=\"chosen\">\n                  <option>30 Per Page</option>\n                  <option>40 Per Page</option>\n                  <option>50 Per Page</option>\n                  <option>60 Per Page</option>\n                </select>\n               </div> -->\n               <h5>{{jobs?.length}} Jobs & Vacancies</h5>\n             </div>\n           </div><!-- MOdern Job LIst -->\n           <div class=\"job-list-modern\">\n             <div *ngIf=\"jobs\" class=\"job-listings-sec no-border\">\n              <div *ngFor=\"let job of jobs  | filter : searchText; let i = index\" class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l1.png\" alt=\"\" /> </div>\n                  <h3><a [routerLink]=\"['/jobs/search/single',job.jobId]\"  title=\"\">{{job.details.title}}</a></h3>\n                  <span>{{job.details.level}}</span>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is ft\">{{job.details.type}}</span>\n                  <i>{{job.details.publishDate | date}}</i>\n                </div>\n              </div>\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l2.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">C Developer (Senior) C .Net</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is pt \">Part time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div> Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l3.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Regional Sales Manager South</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is ft \">Full time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l4.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Marketing Dairector</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is ft \">Full time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l5.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Application Developer</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is pt \">Part time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l6.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Social Media and Public</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is fl \">Freelance</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l2.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">C Developer (Senior) C .Net</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is pt \">Part time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l3.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Regional Sales Manager South</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is ft \">Full time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l4.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Marketing Dairector</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is ft \">Full time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n              <!-- <div class=\"job-listing wtabs\">\n                <div class=\"job-title-sec\">\n                  <div class=\"c-logo\"> <img src=\"assets/images/resource/l5.png\" alt=\"\" /> </div>\n                  <h3><a href=\"#\" title=\"\">Application Developer</a></h3>\n                  <span>Massimo Artemisis</span>\n                  <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                </div>\n                <div class=\"job-style-bx\">\n                  <span class=\"job-is pt \">Part time</span>\n                  <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                  <i>5 months ago</i>\n                </div>\n              </div>Job -->\n            </div>\n            <!-- <div class=\"pagination\">\n              <ul>\n                <li class=\"prev\"><a href=\"#\"><i class=\"la la-long-arrow-left\"></i> Prev</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li class=\"active\"><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><span class=\"delimeter\">...</span></li>\n                <li><a href=\"#\">14</a></li>\n                <li class=\"next\"><a href=\"#\">Next <i class=\"la la-long-arrow-right\"></i></a></li>\n              </ul>\n            </div>Pagination -->\n           </div>\n         </div>\n       </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/job/search/jb-list/jb-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/job/search/jb-list/jb-list.component.ts ***!
  \*********************************************************/
/*! exports provided: JbListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbListComponent", function() { return JbListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../job.service */ "./src/app/job/job.service.ts");




var JbListComponent = /** @class */ (function () {
    function JbListComponent(route, jobService) {
        this.route = route;
        this.jobService = jobService;
        this.jobs = [];
        this.searchText = '';
    }
    JbListComponent.prototype.ngOnInit = function () {
        this.getAllJobs();
    };
    JbListComponent.prototype.getAllJobs = function () {
        var _this = this;
        this.jobService.getAllJobs();
        this.subscription = this.jobService.getJobUpdateListener()
            .subscribe(function (jobs) {
            _this.jobs = jobs;
            console.log(jobs);
        });
    };
    JbListComponent.prototype.ngOnDestroy = function () {
        console.log("hi");
        this.subscription.unsubscribe();
    };
    JbListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jb-list',
            template: __webpack_require__(/*! ./jb-list.component.html */ "./src/app/job/search/jb-list/jb-list.component.html"),
            styles: [__webpack_require__(/*! ./jb-list.component.css */ "./src/app/job/search/jb-list/jb-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], JbListComponent);
    return JbListComponent;
}());



/***/ }),

/***/ "./src/app/job/search/jb-single/jb-single.component.css":
/*!**************************************************************!*\
  !*** ./src/app/job/search/jb-single/jb-single.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9zZWFyY2gvamItc2luZ2xlL2piLXNpbmdsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/job/search/jb-single/jb-single.component.html":
/*!***************************************************************!*\
  !*** ./src/app/job/search/jb-single/jb-single.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlape\">\n  <div class=\"block no-padding\">\n    <div data-velocity=\"-.1\" style=\"background: url(assets/images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent;\" class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner-header\">\n            <h3>{{data?.details.title}} {{data?.details.level}}</h3>\n            <!-- <div class=\"job-statistic\">\n              <span>PART TIME</span>\n              <p><i class=\"la la-map-marker\"></i> Ajax, Ontario</p>\n              <p><i class=\"la la-calendar-o\"></i>Posted 4 years ago</p>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 column\">\n          <div class=\"job-single-sec\">\n            <div class=\"job-single-head\">\n              <div class=\"job-thumb\"> <img src=\"assets/images/resource/sj.png\" alt=\"\" /> </div>\n              <div class=\"job-head-info\">\n                <h4>{{company?.employer.name.first}}</h4>\n                <span>{{company?.employer.address.street}}, {{company?.employer.address.district}}, {{company?.employer.address.city }} {{company?.employer.address.country}}</span>\n                <p><i class=\"la la-unlink\"></i> {{company?.employer.email}}</p>\n                <p><i class=\"la la-phone\"></i> {{company?.hr.mobile}}</p>\n                <p><i class=\"la la-envelope-o\"></i> <a href=\"https://grandetest.com/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"fc9d9095d288899a9d92bc96939e94899288d29f9391\">{{company?.employer.email}}</a></p>\n              </div>\n            </div><!-- Job Head -->\n            <div class=\"job-details\">\n             <p style=\"font-size: 20px\">offered positions: {{data?.details.offeredJobs}}</p>\n             <h2> </h2>\n              <p style=\"font-size: 20px\">Salary:</p>\n              <p *ngIf=\"data?.details.offeredSalary.offeredSalaryState\" style=\"font-size: 15px\">{{data?.details.offeredSalary.salary}}</p>\n              <p *ngIf=\"!data?.details.offeredSalary.offeredSalaryState\" style=\"font-size: 15px\">Confidential</p>\n              <p style=\"font-size: 20px\">Job Description:</p>\n              <p style=\"font-size: 15px\">{{data?.details.description}}</p>\n\n              <p style=\"font-size: 20px\">Skills Required:</p>\n              <ul *ngFor=\"let skill of data?.details.skills  \">\n                <li style=\"font-size: 15px\">{{skill}}</li>\n              </ul>\n\n              <p style=\"font-size: 20px\">About Company:</p>\n              <p style=\"font-size: 15px\">{{company?.description}}</p>\n            </div>\n            <!-- <div class=\"share-bar\">\n              <span>Share</span><a href=\"#\" title=\"\" class=\"share-fb\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" title=\"\" class=\"share-twitter\"><i class=\"fa fa-twitter\"></i></a>\n            </div> -->\n            <!-- <div class=\"recent-jobs\"> -->\n              <!-- <h3>Recent Jobs</h3>\n              <div class=\"job-list-modern\">\n                <div class=\"job-listings-sec no-border\"> -->\n                  <!-- <div class=\"job-listing wtabs\">\n                    <div class=\"job-title-sec\">\n                      <div class=\"c-logo\"> <img src=\"assets/images/resource/l1.png\" alt=\"\" /> </div>\n                      <h3><a href=\"#\" title=\"\">Web Designer / Developer</a></h3>\n                      <span>Massimo Artemisis</span>\n                      <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                    </div>\n                    <div class=\"job-style-bx\">\n                      <span class=\"job-is ft\">Full time</span>\n                      <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                      <i>5 months ago</i>\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"job-listing wtabs\">\n                    <div class=\"job-title-sec\">\n                      <div class=\"c-logo\"> <img src=\"assets/images/resource/l2.png\" alt=\"\" /> </div>\n                      <h3><a href=\"#\" title=\"\">C Developer (Senior) C .Net</a></h3>\n                      <span>Massimo Artemisis</span>\n                      <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                    </div>\n                    <div class=\"job-style-bx\">\n                      <span class=\"job-is pt \">Part time</span>\n                      <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                      <i>5 months ago</i>\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"job-listing wtabs\">\n                    <div class=\"job-title-sec\">\n                      <div class=\"c-logo\"> <img src=\"assets/images/resource/l3.png\" alt=\"\" /> </div>\n                      <h3><a href=\"#\" title=\"\">Regional Sales Manager South</a></h3>\n                      <span>Massimo Artemisis</span>\n                      <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                    </div>\n                    <div class=\"job-style-bx\">\n                      <span class=\"job-is ft \">Full time</span>\n                      <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                      <i>5 months ago</i>\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"job-listing wtabs\">\n                    <div class=\"job-title-sec\">\n                      <div class=\"c-logo\"> <img src=\"assets/images/resource/l4.png\" alt=\"\" /> </div>\n                      <h3><a href=\"#\" title=\"\">Marketing Dairector</a></h3>\n                      <span>Massimo Artemisis</span>\n                      <div class=\"job-lctn\"><i class=\"la la-map-marker\"></i>Sacramento, California</div>\n                    </div>\n                    <div class=\"job-style-bx\">\n                      <span class=\"job-is ft \">Full time</span>\n                      <span class=\"fav-job\"><i class=\"la la-heart-o\"></i></span>\n                      <i>5 months ago</i>\n                    </div>\n                  </div> -->\n                <!-- </div>\n              </div> -->\n            <!-- </div> -->\n          </div>\n        </div>\n         <div class=\"col-lg-4 column\">\n          <a class=\"apply-thisjob\" *ngIf=\"auth.loggedIn() && !auth.isCandidate()\"  title=\"\"><i class=\"la la-paper-plane\"></i>Apply for job</a>\n          <!-- <div class=\"apply-alternative\">\n            <a href=\"#\" title=\"\"><i class=\"fa fa-linkedin\"></i> Apply with Linkedin</a>\n            <span><i class=\"la la-heart-o\"></i> Shortlist</span>\n          </div> -->\n          <!-- <div class=\"job-overview\">\n            <h3>Job Overview</h3>\n            <ul>\n              <li><i class=\"la la-money\"></i><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>\n              <li><i class=\"la la-mars-double\"></i><h3>Gender</h3><span>Female</span></li>\n              <li><i class=\"la la-thumb-tack\"></i><h3>Career Level</h3><span>Executive</span></li>\n              <li><i class=\"la la-puzzle-piece\"></i><h3>Industry</h3><span>Management</span></li>\n              <li><i class=\"la la-shield\"></i><h3>Experience</h3><span>2 Years</span></li>\n              <li><i class=\"la la-line-chart \"></i><h3>Qualification</h3><span>Bachelor Degree</span></li>\n            </ul>\n          </div> -->\n          <!-- <div class=\"job-location\">\n            <h3>Job Location</h3>\n            <div class=\"job-lctn-map\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926917.0482572999!2d-104.57738594649922!3d40.26036964524562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2s!4v1513784737244\"></iframe>\n            </div>\n          </div> -->\n          <!-- <div class=\"extra-job-info\">\n            <span><i class=\"la la-clock-o\"></i><strong>35</strong> Days</span>\n            <span><i class=\"la la-search-plus\"></i><strong>35697</strong> Displayed</span>\n            <span><i class=\"la la-file-text\"></i><strong>300-500</strong> Application</span>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/job/search/jb-single/jb-single.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/job/search/jb-single/jb-single.component.ts ***!
  \*************************************************************/
/*! exports provided: JbSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbSingleComponent", function() { return JbSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../job.service */ "./src/app/job/job.service.ts");





var JbSingleComponent = /** @class */ (function () {
    function JbSingleComponent(jobService, route, paramroute, auth) {
        this.jobService = jobService;
        this.route = route;
        this.paramroute = paramroute;
        this.auth = auth;
    }
    JbSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramroute.params.subscribe(function (a) {
            _this.jobService.getJobById(a['jobId']).subscribe(function (data) {
                _this.data = data['job'],
                    _this.company = data['company'];
                console.log(data['company']);
            });
        });
    };
    JbSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jb-single',
            template: __webpack_require__(/*! ./jb-single.component.html */ "./src/app/job/search/jb-single/jb-single.component.html"),
            styles: [__webpack_require__(/*! ./jb-single.component.css */ "./src/app/job/search/jb-single/jb-single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], JbSingleComponent);
    return JbSingleComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t<footer class=\"mt-5\">\n\t\t<!-- <div class=\"block\">\n\t\t\t<div class=\"container\"> -->\n\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"about_widget\">\n\t\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t\t<a href=\"index.html\" title=\"\"><img src=\"assets/images/resource/logo.png\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span>Collin Street West, Victor 8007, Australia.</span>\n\t\t\t\t\t\t\t\t<span>+1 246-345-0695</span>\n\t\t\t\t\t\t\t\t<span><a href=\"https://grandetest.com/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"d4bdbab2bb94bebbb6bca1baa0fab7bbb9\">[email&#160;protected]</a></span>\n\t\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><i class=\"fa fa-linkedin\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><i class=\"fa fa-pinterest\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><i class=\"fa fa-behance\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- <div class=\"col-lg-4 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Privacy & Seurty </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Terms of Serice</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Communications </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Referral Terms </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Lending Licnses </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Disclaimers </a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Support </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">How It Works </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">For Employers </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Underwriting </a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Contact Us</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- <div class=\"col-lg-2 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Find Jobs</h3>\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">US Jobs</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Canada Jobs</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">UK Jobs</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Emplois en Fnce</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Jobs in Deuts</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Vacatures China</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- <div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"download_widget\">\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"assets/images/resource/dw1.png\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"assets/images/resource/dw2.png\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- </div>\n\t\t\t</div> -->\n\n\t\t<div class=\"bottom-line\">\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\n\t\t\t<!-- <a href=\"#scrollup\" class=\"scrollup\" title=\"\"><i class=\"la la-arrow-up\"></i></a> -->\n\t\t</div>\n\t</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/loading/loading.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/loading/loading.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/loading/loading.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/loading/loading.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-loading\">\n\t<img src=\"assets/images/loader.gif\" alt=\"\" />\n</div>"

/***/ }),

/***/ "./src/app/layout/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/layout/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/layout/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"responsive-header\">\r\n  <div class=\"responsive-menubar\">\r\n    <div class=\"res-logo\"><a routerLink=\"\" title=\"\"><img alt=\"\" src=\"assets/images/resource/logo.png\"/></a></div>\r\n    <div class=\"menu-resaction\">\r\n      <div class=\"res-openmenu\">\r\n        <img alt=\"\" src=\"assets/images/icon.png\"/> Menu\r\n      </div>\r\n      <div class=\"res-closemenu\">\r\n        <img alt=\"\" src=\"assets/images/icon2.png\"/> Close\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"responsive-opensec\">\r\n    <div class=\"btn-extars\">\r\n      <a *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/auth/register/','0']\" class=\"btn btn-primary mr-2\"><i\r\n        class=\"la la-user\"></i> Sign Up</a>\r\n      <a *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/auth/register','1']\" class=\"btn btn-primary mr-2\"><i\r\n        class=\"la la-building\"></i> Sign Up</a>\r\n      <a *ngIf=\"!auth.loggedIn()\" routerLink=\"/auth/login\"><i class=\"la la-external-link-square\"></i> Login</a>\r\n      <a (click)=\"Logout()\" *ngIf=\"auth.loggedIn()\"><i></i> Logout</a>\r\n\r\n    </div>\r\n    ><!-- Btn Extras -->\r\n    <form class=\"res-search\">\r\n      <input placeholder=\"Job title, keywords or company name\" type=\"text\"/>\r\n      <button type=\"submit\"><i class=\"la la-search\"></i></button>\r\n    </form>\r\n    <div class=\"responsivemenu\">\r\n      <ul>\r\n        <li *ngIf=\"auth.loggedIn() && auth.isCandidate() && id\" class=\"\">\r\n          <a [routerLink]=\"['/employers/profile',id]\" title=\"\">My profile</a>\r\n        </li>\r\n        <li class=\"\">\r\n          <a routerLink=\"\" title=\"\">Home</a>\r\n        </li>\r\n\r\n        <li class=\"\">\r\n          <a routerLink=\"/employers/search\" title=\"\">Employers</a>\r\n          <!-- <ul>\r\n            <li><a routerLink=\"/employers/search\" title=\"\">Employer List 2</a></li>\r\n            <li><a routerLink=\"/employers/profile/1\" title=\"\">Employer Single 1</a></li>\r\n            <li class=\"menu-item-has-children\">\r\n              <a routerLink=\"\" title=\"\">Employer Dashboard</a>\r\n              <ul>\r\n                <li><a routerLink=\"employers/dashboard/job-manager\" title=\"\">Employer Job Manager</a></li>\r\n                <li><a routerLink=\"employers/dashboard/post-new\" title=\"\">Employer Post New</a></li>\r\n                <li><a routerLink=\"employers/dashboard/profile/1\" title=\"\">Employer Profile</a></li>\r\n                 <li><a href=\"employer_job_alert.html\" title=\"\">Employer Job Alert</a></li>\r\n                <li><a routerLink=\"/employers/dashboard/change-password\" title=\"\">Employer Change Password</a></li>\r\n\r\n              </ul>\r\n            </li>\r\n          </ul> -->\r\n        </li>\r\n\r\n        <!--menu-item-has-children-->\r\n        <li class=\"\">\r\n          <a routerLink=\"/candidates\" title=\"\">Candidates</a>\r\n          <!--<ul>-->\r\n          <!--<li><a routerLink=\"/candidate\" title=\"\">Candidates List 3</a></li>-->\r\n          <!--<li><a routerLink=\"/candidate/{{candidateData?._id}}\" title=\"\">Candidates Single 1</a></li>-->\r\n          <!--<li class=\"menu-item-has-children\">-->\r\n          <!--<a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/\" title=\"\">Candidates Dashboard</a>-->\r\n          <!--<ul>-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/profile\" title=\"\">-->\r\n          <!--Candidates Profile</a></li>-->\r\n          <!--&lt;!&ndash; <li><a href=\"candidates_shortlist.html\" title=\"\">Candidates Shortlist</a></li> &ndash;&gt;-->\r\n          <!--&lt;!&ndash; <li><a href=\"candidates_job_alert.html\" title=\"\">Candidates Job Alert</a></li> &ndash;&gt;-->\r\n          <!--&lt;!&ndash; <li><a href=\"candidates_dashboard.html\" title=\"\">Candidates Dashboard</a></li> &ndash;&gt;-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/cv-cover\" title=\"\">-->\r\n          <!--CV Cover Letter</a></li>-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/resume\" title=\"\">-->\r\n          <!--Candidates Resume</a></li>-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/new-resume\" title=\"\">-->\r\n          <!--Candidates Resume new</a></li>-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/applied-jobs\" title=\"\">-->\r\n          <!--Candidates Applied Jobs</a></li>-->\r\n          <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/change-password\" title=\"\">-->\r\n          <!--Change Password</a></li>-->\r\n          <!--</ul>-->\r\n          <!--</li>-->\r\n          <!--</ul>-->\r\n        </li>\r\n\r\n        <li class=\"\">\r\n          <a routerLink=\"jobs/search/list\" title=\"\">Jobs</a>\r\n          <!-- <ul>\r\n            <li><a routerLink=\"jobs/search/list\">Job List Classic</a></li>\r\n            <li><a routerLink=\"jobs/search/grid\">Job List Grid</a></li>\r\n            <li><a routerLink=\"jobs/search/single\">Job Single 1</a></li>\r\n          </ul> -->\r\n        </li>\r\n\r\n        <li class=\"menu-item-has-children\">\r\n          <a routerLink=\"\" title=\"\">Blogs</a>\r\n          <ul>\r\n            <li><a routerLink=\"blogs/list\"> Blog List 1</a></li>\r\n            <li><a routerLink=\"blogs/single\">Blog Single</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"menu-item-has-children\">\r\n          <a routerLink=\"\" title=\"\">Pages</a>\r\n          <ul>\r\n            <li><a routerLink=\"about-us\" title=\"\">About Us</a></li>\r\n            <li><a routerLink=\"error\" title=\"\">404 Error</a></li>\r\n            <li><a routerLink=\"contact-us\" title=\"\">Contact Us 2</a></li>\r\n            <li><a routerLink=\"/faq\" title=\"\">FAQ's</a></li>\r\n            <li><a routerLink=\"/how-it-works\" title=\"\">How it works</a></li>\r\n            <li><a routerLink=\"/auth/login\" title=\"\">Login</a></li>\r\n            <li><a routerLink=\"/register\" title=\"\">Register</a></li>\r\n            <li><a routerLink=\"/terms-and-conditions\" title=\"\">Terms & Condition</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<header class=\"stick-top forsticky\">\r\n  <div class=\"menu-sec\">\r\n    <div class=\"container\">\r\n      <div class=\"logo\">\r\n        <a routerLink=\"\" title=\"\"><img class=\"hidesticky\" src=\"assets/images/resource/logo.png\" alt=\"\"/><img\r\n          class=\"showsticky\" src=\"assets/images/resource/logo10.png\" alt=\"\"/></a>\r\n      </div><!-- Logo -->\r\n      <div class=\"btn-extars pt-2\">\r\n\r\n\r\n        <!--<a class=\"btn btn-link\" *ngIf=\"auth.loggedIn()\" (click)=\"Logout()\"><i class=\"la la-external-link-square\"></i>-->\r\n          <!--Logout</a>-->\r\n\r\n        <div class=\"btns-profiles-sec\">\r\n          <span><img src=\"http://localhost:3000/upload/default_profile_picture.jpg\" alt=\"\"\r\n                     style=\"width: 50px;height: 50px;\">\r\n            <!--{{name | titlecase}}-->\r\n            <i class=\"la la-angle-down\"></i></span>\r\n\r\n          <ul style=\"display: none;\" *ngIf=\"!auth.loggedIn()\">\r\n            <li>\r\n              <a [routerLink]=\"['/auth/register/','0']\"><i class=\"la la-user\"></i> Sign Up as Candidate</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/auth/register','1']\"><i class=\"la la-building\"></i> Sign Up as Employer</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/auth/login\"><i\r\n                class=\"la la-external-link-square\"></i> Login</a>\r\n            </li>\r\n          </ul>\r\n          <ul style=\"display: none;\" *ngIf=\"auth.loggedIn()\">\r\n            <li><a routerLink=\"candidates/{{candidateId}}/dashboard/profile\"><i class=\"la la-user\"></i> Profile</a></li>\r\n            <li><a routerLink=\"candidates/{{candidateId}}/dashboard/cv-cover\"><i class=\"la la-file-text\"></i> CV & Cover Letter</a></li>\r\n            <li><a routerLink=\"candidates/{{candidateId}}/dashboard/resume\"><i class=\"la la-paper-plane\"></i> Resume</a></li>\r\n            <li><a routerLink=\"candidates/{{candidateId}}/dashboard/applied-jobs\"><i class=\"la la-briefcase\"></i> Applied Jobs</a></li>\r\n            <li><a routerLink=\"candidates/{{candidateId}}/dashboard/change-password\"><i class=\"la la-lock\"></i> Change Password</a></li>\r\n            <li><a (click)=\"Logout()\"><i class=\"la la-unlink\"></i> Logout</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- <ul class=\"account-btns\">\r\n          <li class=\"signup-popup\"><a title=\"\"><i class=\"la la-key\"></i> Sign Up</a></li>\r\n          <li class=\"signin-popup\" *ngIf=\"auth.loggedIn()\" (click)=\"Logout()\"><a title=\"\"><i class=\"la la-external-link-square\"></i> Login</a></li> -->\r\n\r\n      </div><!-- Btn Extras -->\r\n      <nav>\r\n        <ul>\r\n          <li *ngIf=\"auth.loggedIn() && auth.isCandidate() && id\" class=\"\">\r\n            <a [routerLink]=\"['/employers/profile',id]\" title=\"\">My profile</a>\r\n          </li>\r\n          <li class=\"\">\r\n            <a routerLink=\"\" title=\"\">Home</a>\r\n          </li>\r\n\r\n          <li class=\"\">\r\n            <a routerLink=\"/employers/search\" title=\"\">Employers</a>\r\n            <!-- <ul>\r\n              <li><a routerLink=\"/employers/search\" title=\"\">Employer List 2</a></li>\r\n              <li><a routerLink=\"/employers/profile/1\" title=\"\">Employer Single 1</a></li>\r\n              <li class=\"menu-item-has-children\">\r\n                <a routerLink=\"\" title=\"\">Employer Dashboard</a>\r\n                <ul>\r\n                  <li><a routerLink=\"employers/dashboard/job-manager\" title=\"\">Employer Job Manager</a></li>\r\n                  <li><a routerLink=\"employers/dashboard/post-new\" title=\"\">Employer Post New</a></li>\r\n                  <li><a routerLink=\"employers/dashboard/profile/1\" title=\"\">Employer Profile</a></li>\r\n                   <li><a href=\"employer_job_alert.html\" title=\"\">Employer Job Alert</a></li>\r\n                  <li><a routerLink=\"/employers/dashboard/change-password\" title=\"\">Employer Change Password</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul> -->\r\n          </li>\r\n          <!--menu-item-has-children-->\r\n          <li class=\"\">\r\n            <a routerLink=\"/candidates\" title=\"\">Candidates</a>\r\n            <!--<ul>-->\r\n            <!--<li><a routerLink=\"/candidates\" title=\"\">Candidates List 3</a></li>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}\" title=\"\">Candidates Single 1</a></li>-->\r\n            <!--<li class=\"menu-item-has-children\">-->\r\n            <!--<a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/\" title=\"\">Candidates Dashboard</a>-->\r\n            <!--<ul>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/profile\" title=\"\">-->\r\n            <!--Candidates Profile</a></li>-->\r\n            <!--&lt;!&ndash; <li><a href=\"candidates_shortlist.html\" title=\"\">Candidates Shortlist</a></li> &ndash;&gt;-->\r\n            <!--&lt;!&ndash; <li><a href=\"candidates_job_alert.html\" title=\"\">Candidates Job Alert</a></li> &ndash;&gt;-->\r\n            <!--&lt;!&ndash; <li><a href=\"candidates_dashboard.html\" title=\"\">Candidates Dashboard</a></li> &ndash;&gt;-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/cv-cover\" title=\"\">-->\r\n            <!--CV Cover Letter</a></li>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/resume\" title=\"\">-->\r\n            <!--Candidates Resume</a></li>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/new-resume\" title=\"\">-->\r\n            <!--Candidates Resume new</a></li>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/applied-jobs\" title=\"\">-->\r\n            <!--Candidates Applied Jobs</a></li>-->\r\n            <!--<li><a routerLink=\"/candidates/{{candidateData?._id}}/dashboard/change-password\" title=\"\">-->\r\n            <!--Change Password</a></li>-->\r\n            <!--</ul>-->\r\n            <!--</li>-->\r\n            <!--</ul>-->\r\n          </li>\r\n\r\n          <li class=\"\">\r\n            <a routerLink=\"jobs/search/list\" title=\"\">Jobs</a>\r\n            <!-- <ul>\r\n              <li><a routerLink=\"jobs/search/list\">Job List Classic</a></li>\r\n              <li><a routerLink=\"jobs/search/grid\">Job List Grid</a></li>\r\n              <li><a routerLink=\"jobs/search/single\">Job Single 1</a></li>\r\n            </ul> -->\r\n          </li>\r\n\r\n          <!--<li class=\"menu-item-has-children\">-->\r\n          <!--<a routerLink=\"\" title=\"\">Blogs</a>-->\r\n          <!--<ul>-->\r\n          <!--<li><a routerLink=\"blogs/list\"> Blog List 1</a></li>-->\r\n          <!--<li><a routerLink=\"blogs/single\">Blog Single</a></li>-->\r\n          <!--</ul>-->\r\n          <!--</li>-->\r\n\r\n          <!--<li class=\"menu-item-has-children\">-->\r\n          <!--<a routerLink=\"\" title=\"\">Pages</a>-->\r\n          <!--<ul>-->\r\n          <!--<li><a routerLink=\"about-us\" title=\"\">About Us</a></li>-->\r\n          <!--<li><a routerLink=\"error\" title=\"\">404 Error</a></li>-->\r\n          <!--<li><a routerLink=\"contact-us\" title=\"\">Contact Us 2</a></li>-->\r\n          <!--<li><a routerLink=\"/faq\" title=\"\">FAQ's</a></li>-->\r\n          <!--<li><a routerLink=\"/how-it-works\" title=\"\">How it works</a></li>-->\r\n          <!--<li><a routerLink=\"auth/login\" title=\"\">Login</a></li>-->\r\n          <!--<li><a routerLink=\"/register\" title=\"\">Register</a></li>-->\r\n          <!--<li><a routerLink=\"/terms-and-conditions\" title=\"\">Terms & Condition</a></li>-->\r\n          <!--</ul>-->\r\n          <!--</li>-->\r\n        </ul>\r\n      </nav><!-- Menus -->\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../candidate/dashboard/candidate-dashboard.service */ "./src/app/candidate/dashboard/candidate-dashboard.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, _ser) {
        this.auth = auth;
        this._ser = _ser;
        this.login = this.auth.loggedIn();
        this.candidate = this._ser.candidateData;
        // this.name = this.candidate.information.name.first.substr(0, 10);
        this.candidateId = localStorage.getItem('_id');
    }
    NavbarComponent.prototype.Logout = function () {
        this._ser.candidateData = this._ser.candidateEmpty;
        this.auth.Logout();
    };
    NavbarComponent.prototype.userType = function () {
        return this.candidate._id == localStorage.getItem('_id');
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // console.log(this.login);
        this.id = localStorage.getItem('accountId');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layout/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _candidate_dashboard_candidate_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CandidateDashboardService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/popup/login-modal/login-modal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/popup/login-modal/login-modal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3B1cC9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/popup/login-modal/login-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/popup/login-modal/login-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"account-popup-area signin-popup-box\">\n  <div class=\"account-popup\">\n    <span class=\"close-popup\"><i class=\"la la-close\"></i></span>\n    <h3>User Login</h3>\n    <span>Click To Login With Demo User</span>\n    <div class=\"select-user\">\n      <span>Candidate</span>\n      <span>Employer</span>\n    </div>\n    <form>\n      <div class=\"cfield\">\n        <input type=\"text\" placeholder=\"Username\" />\n        <i class=\"la la-user\"></i>\n      </div>\n      <div class=\"cfield\">\n        <input type=\"password\" placeholder=\"********\" />\n        <i class=\"la la-key\"></i>\n      </div>\n      <p class=\"remember-label\">\n        <input type=\"checkbox\" name=\"cb\" id=\"cb1\"><label for=\"cb1\">Remember me</label>\n      </p>\n      <a href=\"#\" title=\"\">Forgot Password?</a>\n      <button type=\"submit\">Login</button>\n    </form>\n    <div class=\"extra-login\">\n      <span>Or</span>\n      <div class=\"login-social\">\n        <a class=\"fb-login\" href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n        <a class=\"tw-login\" href=\"#\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n      </div>\n    </div>\n  </div>\n</div><!-- LOGIN POPUP -->\n"

/***/ }),

/***/ "./src/app/layout/popup/login-modal/login-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/popup/login-modal/login-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent() {
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-modal',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/layout/popup/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.css */ "./src/app/layout/popup/login-modal/login-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/popup/register-modal/register-modal.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layout/popup/register-modal/register-modal.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3B1cC9yZWdpc3Rlci1tb2RhbC9yZWdpc3Rlci1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/popup/register-modal/register-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/popup/register-modal/register-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-popup-area signup-popup-box\">\n  <div class=\"account-popup\">\n    <span class=\"close-popup\"><i class=\"la la-close\"></i></span>\n    <h3>Sign Up</h3>\n    <div class=\"select-user\">\n      <span>Candidate</span>\n      <span>Employer</span>\n    </div>\n    <form>\n      <div class=\"cfield\">\n        <input type=\"text\" placeholder=\"Username\"/>\n        <i class=\"la la-user\"></i>\n      </div>\n      <div class=\"cfield\">\n        <input type=\"password\" placeholder=\"********\"/>\n        <i class=\"la la-key\"></i>\n      </div>\n      <div class=\"cfield\">\n        <input type=\"text\" placeholder=\"Email\"/>\n        <i class=\"la la-envelope-o\"></i>\n      </div>\n      <div class=\"dropdown-field\">\n        <select data-placeholder=\"Please Select Specialism\" class=\"chosen\">\n          <option>Web Development</option>\n          <option>Web Designing</option>\n          <option>Art & Culture</option>\n          <option>Reading & Writing</option>\n        </select>\n      </div>\n      <div class=\"cfield\">\n        <input type=\"text\" placeholder=\"Phone Number\"/>\n        <i class=\"la la-phone\"></i>\n      </div>\n      <button type=\"submit\">Signup</button>\n    </form>\n    <div class=\"extra-login\">\n      <span>Or</span>\n      <div class=\"login-social\">\n        <a class=\"fb-login\" href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n        <a class=\"tw-login\" href=\"#\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n      </div>\n    </div>\n  </div>\n</div><!-- SIGNUP POPUP -->\n"

/***/ }),

/***/ "./src/app/layout/popup/register-modal/register-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/popup/register-modal/register-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModalComponent", function() { return RegisterModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterModalComponent = /** @class */ (function () {
    function RegisterModalComponent() {
    }
    RegisterModalComponent.prototype.ngOnInit = function () {
    };
    RegisterModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-modal',
            template: __webpack_require__(/*! ./register-modal.component.html */ "./src/app/layout/popup/register-modal/register-modal.component.html"),
            styles: [__webpack_require__(/*! ./register-modal.component.css */ "./src/app/layout/popup/register-modal/register-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterModalComponent);
    return RegisterModalComponent;
}());



/***/ }),

/***/ "./src/app/others/about-us/about-us.component.css":
/*!********************************************************!*\
  !*** ./src/app/others/about-us/about-us.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/others/about-us/about-us.component.html":
/*!*********************************************************!*\
  !*** ./src/app/others/about-us/about-us.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"gradient\">\n</header>\n\n<section>\n  <div class=\"block no-padding  gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner2\">\n            <div class=\"inner-title2\">\n              <h3>About Us</h3>\n              <span>Keep up to date with the latest news</span>\n            </div>\n            <div class=\"page-breacrumbs\">\n              <ul class=\"breadcrumbs\">\n                <li><a href=\"#\" title=\"\">Home</a></li>\n                <li><a href=\"#\" title=\"\">Pages</a></li>\n                <li><a href=\"#\" title=\"\">About Us</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"about-us\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <h3>About Job Hunt</h3>\n              </div>\n              <div class=\"col-lg-7\">\n                <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly\n                  vehement\n                  irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a\n                  glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much\n                  connected\n                  bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>\n                <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes\n                  that as\n                  or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident\n                  wiped set\n                  waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far\n                  much\n                  hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence\n                  one.Far\n                  much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement\n                  irresistibly fussy.</p>\n              </div>\n              <div class=\"col-lg-5\">\n                <img src=\"assets/images/resource/bsd1.jpg\" alt=\"\"/>\n              </div>\n              <div class=\"col-lg-12\">\n                <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly\n                  vehement\n                  irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a\n                  glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much\n                  connected\n                  bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>\n                <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes\n                  that as\n                  or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident\n                  wiped set\n                  waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far\n                  much\n                  hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence\n                  one.Far\n                  much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement\n                  irresistibly fussy.</p>\n              </div>\n            </div>\n            <div class=\"tags-share\">\n              <div class=\"share-bar\">\n                <a href=\"#\" title=\"\" class=\"share-fb\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\" title=\"\"\n                                                                                           class=\"share-twitter\"><i\n                class=\"fa fa-twitter\"></i></a><a href=\"#\" title=\"\" class=\"share-google\"><i class=\"la la-google\"></i></a><span>Share</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block remove-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"our-services\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <h2>Our Service</h2>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-clock-o\"></i>\n                  <div class=\"service-info\">\n                    <h3>Advertise A Job</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-search\"></i>\n                  <div class=\"service-info\">\n                    <h3>CV Search</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-user\"></i>\n                  <div class=\"service-info\">\n                    <h3>Recruiter Profiles</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-codepen\"></i>\n                  <div class=\"service-info\">\n                    <h3>Temp Search</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-tv\"></i>\n                  <div class=\"service-info\">\n                    <h3>Display Jobs</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"service\">\n                  <i class=\"la la-diamond\"></i>\n                  <div class=\"service-info\">\n                    <h3>For Agencies</h3>\n                    <p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div data-velocity=\"-.1\"\n         style=\"background: url(assets/images/resource/parallax2.jpg) repeat scroll 50% 422.28px transparent;\"\n         class=\"parallax scrolly-invisible layer color light\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading light\">\n            <h2>Kind Words From Happy Candidates</h2>\n            <span>What other people thought about the service provided by JobHunt</span>\n          </div><!-- Heading -->\n          <div class=\"reviews-sec\" id=\"reviews-carousel\">\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r1.jpg\" alt=\"\"/>\n                <h3>Augusta Silva <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!\n                  Can’t\n                  quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r2.jpg\" alt=\"\"/>\n                <h3>Ali Tufan <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!\n                  Can’t\n                  quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r1.jpg\" alt=\"\"/>\n                <h3>Augusta Silva <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!\n                  Can’t\n                  quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n            <div class=\"col-lg-6\">\n              <div class=\"reviews\">\n                <img src=\"assets/images/resource/r2.jpg\" alt=\"\"/>\n                <h3>Ali Tufan <span>Web designer</span></h3>\n                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!\n                  Can’t\n                  quite believe the service</p>\n              </div><!-- Reviews -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"stats-sec style2\">\n            <div class=\"row\">\n              <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-6\">\n                <div class=\"stats\">\n                  <span>18</span>\n                  <h5>Jobs Posted</h5>\n                </div>\n              </div>\n              <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-6\">\n                <div class=\"stats\">\n                  <span>38</span>\n                  <h5>Jobs Filled</h5>\n                </div>\n              </div>\n              <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-6\">\n                <div class=\"stats\">\n                  <span>67</span>\n                  <h5>Companies</h5>\n                </div>\n              </div>\n              <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-6\">\n                <div class=\"stats\">\n                  <span>92</span>\n                  <h5>Members</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div data-velocity=\"-.1\"\n         style=\"background: url(assets/images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent;\"\n         class=\"parallax scrolly-invisible no-parallax\"></div><!-- PARALLAX BACKGROUND IMAGE -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Quick Career Tips</h2>\n            <span>Found by employers communicate directly with hiring managers and recruiters.</span>\n          </div><!-- Heading -->\n          <div class=\"blog-sec\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b1.jpg\" alt=\"\"/></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">Attract More Attention Sales And Profits</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b2.jpg\" alt=\"\"/></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">11 Tips to Help You Get New Clients</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"my-blog\">\n                  <div class=\"blog-thumb\">\n                    <a href=\"#\" title=\"\"><img src=\"assets/images/resource/b3.jpg\" alt=\"\"/></a>\n                    <div class=\"blog-metas\">\n                      <a href=\"#\" title=\"\">March 29, 2017</a>\n                      <a href=\"#\" title=\"\">0 Comments</a>\n                    </div>\n                  </div>\n                  <div class=\"blog-details\">\n                    <h3><a href=\"#\" title=\"\">An Overworked Newspaper Editor</a></h3>\n                    <p>A job is a regular activity performed in exchange becoming an employee, volunteering, </p>\n                    <a href=\"#\" title=\"\">Read More <i class=\"la la-long-arrow-right\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>Companies We've Helped</h2>\n            <span>Some of the companies we've helped recruit excellent applicants over the years.</span>\n          </div><!-- Heading -->\n          <div class=\"comp-sec\">\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc1.jpg\" alt=\"\"/></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc2.jpg\" alt=\"\"/></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc3.jpg\" alt=\"\"/></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc4.jpg\" alt=\"\"/></a>\n            </div><!-- Client  -->\n            <div class=\"company-img\">\n              <a href=\"#\" title=\"\"><img src=\"assets/images/resource/cc5.jpg\" alt=\"\"/></a>\n            </div><!-- Client  -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/others/about-us/about-us.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/others/about-us/about-us.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/others/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/others/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/others/contact-us/contact-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/others/contact-us/contact-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/others/contact-us/contact-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/others/contact-us/contact-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"gradient\"></header>\n\n<section>\n  <div class=\"block no-padding  gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner2\">\n            <div class=\"inner-title2\">\n              <h3>Contact</h3>\n              <span>Keep up to date with the latest news</span>\n            </div>\n            <div class=\"page-breacrumbs\">\n              <ul class=\"breadcrumbs\">\n                <li><a href=\"#\" title=\"\">Home</a></li>\n                <li><a href=\"#\" title=\"\">Pages</a></li>\n                <li><a href=\"#\" title=\"\">Contact</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block remove-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"contact-map\">\n            <div id=\"map_div\">&nbsp;</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 column\">\n          <div class=\"contact-form\">\n            <h3>Keep In Touch</h3>\n            <form>\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <span class=\"pf-title\">Full Name</span>\n                  <div class=\"pf-field\">\n                    <input type=\"text\" placeholder=\"ALi TUFAN\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-12\">\n                  <span class=\"pf-title\">Email</span>\n                  <div class=\"pf-field\">\n                    <input type=\"text\" placeholder=\"ALi TUFAN\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-12\">\n                  <span class=\"pf-title\">Subject</span>\n                  <div class=\"pf-field\">\n                    <input type=\"text\" placeholder=\"ALi TUFAN\"/>\n                  </div>\n                </div>\n                <div class=\"col-lg-12\">\n                  <span class=\"pf-title\">Message</span>\n                  <div class=\"pf-field\">\n                    <textarea></textarea>\n                  </div>\n                </div>\n                <div class=\"col-lg-12\">\n                  <button type=\"submit\">Send</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-lg-6 column\">\n          <div class=\"contact-textinfo style2\">\n            <h3>JobHunt Office</h3>\n            <ul>\n              <li><i class=\"la la-map-marker\"></i><span>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282 </span>\n              </li>\n              <li><i class=\"la la-phone\"></i><span>Call Us : 0934 343 343</span></li>\n              <li><i class=\"la la-fax\"></i><span>Fax : 0934 343 343</span></li>\n              <li><i class=\"la la-envelope-o\"></i><span>Email : <a\n                href=\"https://grandetest.com/cdn-cgi/l/email-protection\" class=\"__cf_email__\"\n                data-cfemail=\"563f383039163c39343e2338227835393b\">[email&#160;protected]</a></span></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/others/contact-us/contact-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/others/contact-us/contact-us.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/others/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/others/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/others/error/error.component.css":
/*!**************************************************!*\
  !*** ./src/app/others/error/error.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/others/error/error.component.html":
/*!***************************************************!*\
  !*** ./src/app/others/error/error.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-layout\" id=\"scrollup\">\n\n  <section>\n    <div class=\"block no-padding\">\n      <div class=\"container fluid\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"main-featured-sec witherror\">\n              <ul class=\"main-slider-sec text-arrows\">\n                <li><img src=\"assets/images/resource/mslider3.jpg\" alt=\"\"/></li>\n                <li><img src=\"assets/images/resource/mslider2.jpg\" alt=\"\"/></li>\n                <li><img src=\"assets/images/resource/mslider1.jpg\" alt=\"\"/></li>\n              </ul>\n              <div class=\"error-sec\">\n                <img src=\"assets/images/404.png\" alt=\"\"/>\n                <span>We Are Sorry, Page Not Found</span>\n                <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable,\n                  moved or\n                  no longer exist. Check the Url you entered for any mistakes and try again.</p>\n                <form>\n                  <input type=\"text\" placeholder=\"Enter any Keyword\"/>\n                  <button type=\"submit\"><i class=\"la la-search\"></i></button>\n                </form>\n                <h6><a href=\"#\" title=\"\">Back To Homepage</a></h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/others/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/others/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/others/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/others/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/others/faq/faq.component.css":
/*!**********************************************!*\
  !*** ./src/app/others/faq/faq.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9mYXEvZmFxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/others/faq/faq.component.html":
/*!***********************************************!*\
  !*** ./src/app/others/faq/faq.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"gradient\">\n</header>\n\n\n<section>\n  <div class=\"block no-padding  gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner2\">\n            <div class=\"inner-title2\">\n              <h3>Faq</h3>\n              <span>Keep up to date with the latest news</span>\n            </div>\n            <div class=\"page-breacrumbs\">\n              <ul class=\"breadcrumbs\">\n                <li><a href=\"#\" title=\"\">Home</a></li>\n                <li><a href=\"#\" title=\"\">Pages</a></li>\n                <li><a routerLink=\"/others/faq\" title=\"\">Faq</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block \">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"faqs\">\n            <div class=\"faq-box\">\n              <h2>What is a dummy text? <i class=\"la la-minus\"></i></h2>\n              <div class=\"contentbox\">\n                <p>Designer at work who don’t have any content for their product yet have the possibility to insert a\n                  dummy text into their design to judge on the arrangement of text on their site, on readability or on\n                  fonts and sizes. A dummy text is also helpful to present a design without content to a client to show\n                  how the text is going to look like without irritating the client by real texts.</p>\n              </div>\n            </div>\n            <div class=\"faq-box\">\n              <h2>Why another dummy text generator? <i class=\"la la-minus\"></i></h2>\n              <div class=\"contentbox\">\n                <p>Designer at work who don’t have any content for their product yet have the possibility to insert a\n                  dummy text into their design to judge on the arrangement of text on their site, on readability or on\n                  fonts and sizes. A dummy text is also helpful to present a design without content to a client to show\n                  how the text is going to look like without irritating the client by real texts.</p>\n              </div>\n            </div>\n            <div class=\"faq-box\">\n              <h2>Why doesn’t the generator put as many characters as I told him? <i class=\"la la-minus\"></i></h2>\n              <div class=\"contentbox\">\n                <p>Designer at work who don’t have any content for their product yet have the possibility to insert a\n                  dummy text into their design to judge on the arrangement of text on their site, on readability or on\n                  fonts and sizes. A dummy text is also helpful to present a design without content to a client to show\n                  how the text is going to look like without irritating the client by real texts.</p>\n              </div>\n            </div>\n            <div class=\"faq-box\">\n              <h2>What means “Print special chars as HTML entities”? <i class=\"la la-minus\"></i></h2>\n              <div class=\"contentbox\">\n                <p>Designer at work who don’t have any content for their product yet have the possibility to insert a\n                  dummy text into their design to judge on the arrangement of text on their site, on readability or on\n                  fonts and sizes. A dummy text is also helpful to present a design without content to a client to show\n                  how the text is going to look like without irritating the client by real texts.</p>\n              </div>\n            </div>\n            <div class=\"faq-box\">\n              <h2>Why is a template text recommended to be as long as possible? <i class=\"la la-minus\"></i></h2>\n              <div class=\"contentbox\">\n                <p>Designer at work who don’t have any content for their product yet have the possibility to insert a\n                  dummy text into their design to judge on the arrangement of text on their site, on readability or on\n                  fonts and sizes. A dummy text is also helpful to present a design without content to a client to show\n                  how the text is going to look like without irritating the client by real texts.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/others/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/others/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/others/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/others/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/others/how-it-works/how-it-works.component.css":
/*!****************************************************************!*\
  !*** ./src/app/others/how-it-works/how-it-works.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/others/how-it-works/how-it-works.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/others/how-it-works/how-it-works.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"gradient\">\n</header>\n\n\n<section>\n  <div class=\"block no-padding  gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner2\">\n            <div class=\"inner-title2\">\n              <h3>How It Works</h3>\n              <span>Get a digital tour of how Jobhunt works for you.</span>\n            </div>\n            <div class=\"page-breacrumbs\">\n              <ul class=\"breadcrumbs\">\n                <li><a href=\"#\" title=\"\">Home</a></li>\n                <li><a href=\"#\" title=\"\">Pages</a></li>\n                <li><a href=\"#\" title=\"\">How it Works</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block \">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"how-works\">\n            <div class=\"how-workimg\"><img src=\"assets/images/resource/hw1.jpg\" alt=\"\"/></div>\n            <div class=\"how-work-detail\">\n              <div class=\"how-work-box\">\n                <span>1</span>\n                <i class=\"la la-user\"></i>\n                <h3>Register an account</h3>\n                <p>inJob is the leading and longest-running online recruitment in Turkey. We understand that job-seekers\n                  come to us not only for a job, but for an pportunity to realize their professional.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"how-works flip\">\n            <div class=\"how-workimg\"><img src=\"assets/images/resource/hw2.jpg\" alt=\"\"/></div>\n            <div class=\"how-work-detail\">\n              <div class=\"how-work-box\">\n                <span>2</span>\n                <i class=\"la la-file-text\"></i>\n                <h3>Specify & Search Your Job</h3>\n                <p>You’ll receive applications via email. You can also manage jobs and candidates from your Indeed\n                  dashboard. Review applications, Schedule interviews and view recommended candidates all from one\n                  place.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"how-works\">\n            <div class=\"how-workimg\"><img src=\"assets/images/resource/hw3.jpg\" alt=\"\"/></div>\n            <div class=\"how-work-detail\">\n              <div class=\"how-work-box\">\n                <span>3</span>\n                <i class=\"la la-pencil\"></i>\n                <h3>Apply For Job</h3>\n                <p>inJob is the leading and longest-running online recruitment in Turkey. We understand that job-seekers\n                  come to us not only for a job, but for an pportunity to realize their professional.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/others/how-it-works/how-it-works.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/others/how-it-works/how-it-works.component.ts ***!
  \***************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/others/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/others/how-it-works/how-it-works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/others/terms-and-conditions/terms-and-conditions.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/others/terms-and-conditions/terms-and-conditions.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/others/terms-and-conditions/terms-and-conditions.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/others/terms-and-conditions/terms-and-conditions.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"gradient\">\n</header>\n\n<section>\n  <div class=\"block no-padding  gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"inner2\">\n            <div class=\"inner-title2\">\n              <h3>Terms and Conditions</h3>\n              <span>Keep up to date with the latest news</span>\n            </div>\n            <div class=\"page-breacrumbs\">\n              <ul class=\"breadcrumbs\">\n                <li><a href=\"#\" title=\"\">Home</a></li>\n                <li><a href=\"#\" title=\"\">Pages</a></li>\n                <li><a href=\"#\" title=\"\">Faq</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"terms-conditions\">\n            <div class=\"terms\">\n              <h2>1. Terms</h2>\n              <p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use,\n                all\n                applicable laws and regulations, and agree that you are responsible for compliance with any applicable\n                local\n                laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.\n                The\n                materials contained in this web site are protected by applicable copyright and trade mark law.</p>\n            </div>\n            <div class=\"terms\">\n              <h2>2. Limitations</h2>\n              <p>Whilst we try to ensure that the standard of the Website remains high and to maintain the continuity of\n                it,\n                the internet is not an inherently stable medium, and errors, omissions, interruptions of service and\n                delays\n                may occur at any time. We do not accept any liability arising from any such errors, omissions,\n                interruptions\n                or delays or any ongoing obligation or responsibility to operate the Website (or any particular part of\n                it)\n                or to provide the service offered on the Website. We may vary the specification of this site from time\n                to\n                time without notice.</p>\n            </div>\n            <div class=\"terms\">\n              <h2>3. Revisions and Errata</h2>\n              <p>You may only use the Website for lawful purposes when seeking employment or help with your career, when\n                purchasing training courses or when recruiting staff. You must not under any circumstances seek to\n                undermine\n                the security of the Website or any information submitted to or available through it. In particular, but\n                without limitation, you must not seek to access, alter or delete any information to which you do not\n                have\n                authorised access, seek to overload the system via spamming or flooding, take any action or use any\n                device,\n                routine or software to crash, delay, damage or otherwise interfere with the operation of the Website or\n                attempt to decipher, disassemble or modify any of the software, coding or information comprised in the\n                Website.</p>\n            </div>\n            <div class=\"terms\">\n              <h2>4. Site Terms of Use Modifications</h2>\n              <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement\n                irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a\n                glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much\n                connected\n                bat wonderfully on instantaneously. Far much that one rank beheld bluebird after outside ignobly\n                allegedly\n                more when oh arrogantly vehement irresistibly fussy penguin insect additionally. </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/others/terms-and-conditions/terms-and-conditions.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/others/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__(/*! ./terms-and-conditions.component.html */ "./src/app/others/terms-and-conditions/terms-and-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-and-conditions.component.css */ "./src/app/others/terms-and-conditions/terms-and-conditions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hisham\Desktop\MEAN\---\4\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map