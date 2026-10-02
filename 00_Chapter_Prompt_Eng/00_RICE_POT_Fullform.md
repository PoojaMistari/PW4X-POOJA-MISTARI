# 1. Test Plan ID and Title

| Field | Value |
|---|---|
| Test Plan ID | TP-VWO-001 (locally assigned) |
| Title | Test Plan: VWO – Digital Experience Optimization Platform |
| Application | VWO (https://vwo.com marketing site; PRD product URL is https://app.vwo.com/) |
| Plan Owner | Lakshmidevi |
| Prepared as | QA Engineer, 8 years of experience (per request) |
| Status | Draft for review. No tests have been executed. |
| Timeline | 2 months, proposed 5 Oct 2026 to 27 Nov 2026 (8 weeks) |

**Labeling convention:** *Confirmed* = taken from the PRD or your request. *Proposed* = my suggestion needing agreement. *Not provided* = no input supplied.

---

# 2. Objective and References

**Objective:** Verify that VWO meets the functional and non-functional requirements in the PRD, that the core user flows work end to end, and that the application is free of major or critical issues at exit.

**References**
- Product Requirements Document (PRD), VWO, dated January 7, 2026, prepared by Pramod Dutta (FR1–FR9, sections 4–7).
- Earlier traceability workbook (VWO_Test_Plan_Traceability.xlsx) for the initial scenario list.
- Requirement IDs: FR1–FR9 are from the PRD. The non-functional requirements have no PRD IDs, so local IDs (NFR-PERF, NFR-SEC, NFR-SCAL, NFR-PRIV, NFR-REL) are assigned here.

---

# 3. In Scope and Out of Scope

**In scope (Confirmed from PRD)**
- Experimentation: A/B, Split URL, Multivariate testing (FR1); SmartStats Bayesian results (FR2); visual and code editor (FR3)
- Behavioral insights: heatmaps and session recordings (FR4); on-page surveys and funnel analytics (PRD 4.2)
- Audience targeting (FR5); real-time reporting and dashboards (FR6); personalization (FR7)
- Integration connectors (FR8); collaboration and workflow management (FR9)
- Non-functional: performance, security, scalability, data privacy, reliability (PRD section 7)
- User flows 5.1 (set up an A/B test) and 5.2 (analyze behavioral data)
- Login and authentication as the entry gate (from your request)

**Out of scope**
- AI-driven suggestion engine, native mobile SDK enhancements, advanced predictive analytics and ROI forecasting (PRD section 11, Future Enhancements)
- Pricing and licensing (PRD section 9: no requirement, third-party source)
- Penetration testing and load testing beyond agreed figures (Proposed: no figures in PRD; revisit if figures are supplied)

---

# 4. Requirements and Planned Coverage

Scenario counts are the initial set from the earlier workbook (39 in total). They will be expanded with negative and boundary cases during test design (Week 2).

| Req ID | Feature | PRD Priority | Test Types | Initial Scenarios |
|---|---|---|---|---|
| FR1 | A/B, Split & Multivariate Testing | Must | Functional, regression | 5 |
| FR2 | SmartStats Engine | Must | Functional | 2 |
| FR3 | Visual & Code Editor | Must | Functional, performance | 3 |
| FR4 | Heatmaps & Session Recordings | Must | Functional | 4 |
| PRD 4.2 (no FR ID) | Surveys, Funnel Analytics | Not specified in PRD | Functional | 2 |
| FR5 | Audience Targeting | High | Functional | 2 |
| FR6 | Real-time Reporting & Dashboards | Must | Functional | 2 |
| FR7 | Personalization Engine | High | Functional | 3 |
| FR8 | Integration Connectors | High | Integration | 3 |
| FR9 | Collaboration & Workflow Management | Medium | Functional | 3 |
| NFR-PERF / SEC / SCAL / PRIV / REL | Section 7 | Not specified in PRD | Performance, security, privacy, reliability | 8 |
| Flows 5.1, 5.2 | End-to-end user flows | n/a | End-to-end | 2 |
| Login (from request) | Authentication entry gate | Proposed: Must | Smoke, functional, negative | Proposed: added in test design |

**Risk-to-coverage mapping**

| Business Risk | Covered By |
|---|---|
| Users cannot create, save or launch an experiment | FR1, FR3, Flow 5.1, critical-flow checks (Section 7) |
| Wrong or misleading experiment results | FR2, FR6, FR8 (analytics cross-check) |
| Unauthorized access or data exposure | NFR-SEC, NFR-PRIV |
| Slow or timing-out workflows | NFR-PERF, critical-flow checks |

---

# 5. Test Approach, Levels, and Types

**Levels (Proposed)**
1. **Smoke:** login and dashboard reachability, gate for every build.
2. **System / functional:** each FR against PRD wording.
3. **Integration:** connectors (Google Analytics, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal) against sandbox or test accounts.
4. **End-to-end:** flows 5.1 and 5.2.
5. **Regression:** full Must-priority suite re-run after fixes (Weeks 7–8).
6. **UAT support:** Not provided; confirm whether business UAT is expected.

**Types**
- Functional (positive, negative, boundary, edge)
- Integration
- Regression
- Non-functional: performance (2-second editing response), security (2FA, role-based access, activity logs), privacy (GDPR, CCPA, regional), reliability (99.9% uptime, observation only), scalability (needs agreed figures)
- Cross-browser and cross-device (list Not provided, see Section 6)
- Usability and exploratory sessions (Proposed, time-boxed)

**Techniques (Proposed):** equivalence partitioning, boundary value analysis, state transition (experiment lifecycle: draft, running, paused, completed), error guessing, risk-based prioritization.

**Priority convention:** Must / High / Medium taken from the PRD; cases with no PRD priority are Proposed.

---

# 6. Environment, Tools, Access, and Test Data

| Item | Detail |
|---|---|
| Application URLs | https://app.vwo.com/ (PRD). https://vwo.com marketing site: scope Not confirmed (see Section 10) |
| Environment type | Not provided (production vs staging). Proposed: dedicated test account on a non-production or sandbox setup |
| Browsers and OS | Not provided. Proposed: latest Chrome, Firefox, Edge, Safari on Windows and macOS |
| Devices | Not provided. Proposed: one Android and one iOS phone, one tablet |
| Test management / defect tool | Not provided. Proposed: Jira (or Excel workbook already created) |
| Automation / API tools | Not provided. Proposed: Postman for API checks; browser DevTools for performance observation |
| Access | Test accounts per role (admin, editor, viewer). Role names Not provided |
| Plan tier of test account | Not provided (PRD mentions Growth / Pro / Enterprise) |

**Generic (synthetic) test data**

| Data | Value (synthetic) |
|---|---|
| Valid user | qa.admin01@example.com (password via secure store, never written in this plan) |
| Role users | qa.editor01@example.com, qa.viewer01@example.com |
| Invalid user | wrong.user@example.com; empty email; malformed email "qa.user@@example" |
| Passwords | Valid from secure store; invalid "Wrong#Pass123"; empty |
| Experiment names | QA_AB_Homepage_CTA_01, QA_Split_Landing_02, QA_MVT_Pricing_03 |
| Test page URLs | Not provided. Proposed: a QA-owned test site (a generic demo page) |
| Variations | Control + 2 variants (button text, color, headline) |
| Goals | Click on CTA, form submit, page visit |
| Audience segments | Country = India / USA; device = mobile / desktop; new vs returning visitor |
| Visitors | Synthetic traffic generated by testers or scripts only |
| E-commerce flow data (only if a test shop is in scope) | Dummy product, dummy address, vendor-provided test card numbers |

No real customer data or real credentials will be used.

---

# 7. Entry and Exit Criteria

**Entry criteria**

| ID | Criterion | Source |
|---|---|---|
| EN-1 | **Login is successful:** a provisioned test user can open the login page, authenticate, and reach the post-login dashboard (verified by smoke case SM-LOGIN-01) | Your request |
| EN-2 | Test environment and test accounts are available | Proposed |
| EN-3 | PRD reviewed and open questions logged | Proposed |
| EN-4 | Test cases reviewed and test data prepared | Proposed |

**Exit criteria**

| ID | Criterion | Source |
|---|---|---|
| EX-1 | **No open Critical or Major defects.** The application does not show major critical issues | Your request |
| EX-2 | Critical-flow checks pass with no failures or timeouts (list below) | Your request, mapped to VWO |
| EX-3 | 100% of Must-priority cases executed; every failure has a logged defect | Proposed |
| EX-4 | Overall pass rate of at least 95% of executed cases | Proposed threshold, needs agreement |
| EX-5 | Every FR (FR1–FR9) has at least one executed case | Proposed |
| EX-6 | Remaining Minor or Trivial defects are reviewed and accepted by the owner | Proposed |
| EX-7 | Final test summary report approved | Proposed |

**Critical flows for EX-2**

Your examples (cannot add items to cart, cannot checkout, timeout when clicking place order) are e-commerce flows. The PRD describes an experimentation platform with no cart or checkout, so they are mapped as follows (**Proposed mapping, needs confirmation**):

| Your example | VWO equivalent |
|---|---|
| Cannot add items to cart | Cannot create an experiment, add variations, or save changes in the editor |
| Cannot checkout | Cannot configure goals/audience or launch an experiment |
| Timeout when clicking place order | Timeout, hang or error when saving, launching, or opening results; editing actions slower than the 2-second PRD limit |
| (Same, if a test shop is in scope) | Cart, checkout and place-order flows on the tested site still work with an active VWO experiment |

**Severity definitions (Proposed)**
- **Critical:** blocks a core flow with no workaround, or causes data loss or a security breach.
- **Major:** a main feature is impaired, but a workaround exists.
- **Minor:** limited impact, cosmetic or low-use area.
- **Trivial:** negligible impact.

---

# 8. Roles, Responsibilities, Estimates, and Schedule

**Roles**

| Role | Name | Responsibility |
|---|---|---|
| Test Plan Owner / QA Lead | Lakshmidevi | Plan ownership, test design, execution, defect reporting, status reports, exit recommendation |
| Product owner / PRD author | Pramod Dutta (PRD author) | Clarify requirements, approve scope. Role in project: Not provided |
| Developers, DevOps, other QA, approvers | Not provided | To be assigned |

**Estimates (Proposed):** team size is Not provided; the estimate assumes one QA engineer, 5 working days per week, 40 person-days in total.

**Schedule (Proposed)**

| Week | Dates | Activities | Effort |
|---|---|---|---|
| 1 | 5–9 Oct 2026 | Plan review and approval, environment and account setup, PRD clarifications | 5 days |
| 2 | 12–16 Oct | Test case design, test data preparation, case review | 5 days |
| 3–4 | 19–30 Oct | Cycle 1: smoke (EN-1 gate) and functional FR1–FR4, flow 5.1 | 10 days |
| 5 | 2–6 Nov | Cycle 1 continued: FR5–FR9, integrations, flow 5.2 | 5 days |
| 6 | 9–13 Nov | Non-functional: performance, security, privacy, reliability observation | 5 days |
| 7 | 16–20 Nov | Defect retest, regression cycle 2 | 5 days |
| 8 | 23–27 Nov | Final regression, exit review, test summary report, sign-off | 5 days |

---

# 9. Defect Management and Reporting

**Defect lifecycle (Proposed):** New → Assigned → In Progress → Fixed → Retest → Closed (or Reopened / Rejected / Deferred).

**Defect report fields:** ID, title, environment, preconditions, test data, steps to reproduce, expected result, actual result, evidence (screenshot/video/log), severity, priority, linked requirement ID, status. Severity and priority are Proposed until triaged.

**Triage and reporting (Proposed)**
- Daily defect triage during execution weeks (15 minutes).
- Weekly status report to the owner (pass/fail/blocked counts, open defects by severity, risks).
- Test summary report at exit (coverage against FR1–FR9, defect summary, exit criteria status).

---

# 10. Risks, Dependencies, Assumptions, and Open Questions

**Risks and mitigations (Proposed unless noted)**

| Risk | Mitigation |
|---|---|
| Testing on a live SaaS account may affect real traffic or data | Use a dedicated test account and QA-owned test site; avoid production customer data |
| PRD gaps make some expected results unmeasurable | Log as open questions; mark "Not specified in PRD"; get decisions before Week 3 |
| Third-party integrations need external accounts | Request sandbox accounts early (Week 1) |
| Single-person team and 8-week window | Risk-based prioritization of Must cases first; escalate slippage in weekly report |
| Statistical results are hard to verify without known data | Use controlled synthetic traffic with known outcomes |
| PRD cites third-party and "(Website)" sources | Validate derived requirements with the PRD author (PRD risk list covers technical complexity, data accuracy, adoption) |

**Dependencies:** test accounts and plan tier, integration sandbox accounts, a QA test site, PRD clarifications.

**Assumptions (Proposed)**
- Scope is the full PRD (FR1–FR9 and section 7).
- Login is available through the standard email and password flow (2FA behavior Not provided).
- Test effort is one QA engineer.

**Open questions**
1. **Exit examples vs PRD:** your exit examples are e-commerce flows; the PRD has none. Is the intent to test VWO's own flows (as mapped in Section 7), customer e-commerce sites running VWO experiments, or both?
2. **vwo.com vs app.vwo.com:** the PRD covers app.vwo.com. Is the marketing site in scope?
3. Which environment (production, staging, sandbox), and which plan tier will the test account use?
4. Which browsers, devices and operating systems are required?
5. Who else is on the team, and who approves the plan and the exit?
6. Which tools (Jira, test management, automation) are available?
7. Agreed figures for scalability (visitor volume), real-time latency, and SmartStats expectations (the PRD gives none).
8. 2FA method, role definitions, activity log contents and retention, uptime measurement window (PRD gives none).
9. Behavior of each integration connector (sync direction and fields) and of on-page surveys and funnel analytics (no FR ID or expected behavior).

---

# 11. Suspension and Resumption Criteria

**Suspend testing when (Proposed)**
- The login smoke case (SM-LOGIN-01) fails, so the entry gate EN-1 is no longer met.
- The environment is unavailable or unstable for more than half a working day.
- A Critical defect blocks more than 20% of planned cases.
- Test accounts or required access are revoked.

**Resume when**
- The blocking defect or outage is fixed and the login smoke case plus the affected area's smoke checks pass.
- Environment and accounts are confirmed restored.
- The owner approves resumption and the schedule impact is recorded.

---

# 12. Test Deliverables and Approval

**Deliverables**
- This test plan (TP-VWO-001)
- Test cases and requirements traceability matrix
- Test data sheet
- Daily and weekly status reports
- Defect log
- Test summary report with exit criteria status

**Approval (to be completed)**

| Name | Role | Decision | Date |
|---|---|---|---|
| Lakshmidevi | Plan Owner | Pending | |
| Not provided | Product owner | Pending | |
| Not provided | Engineering representative | Pending | |

---

*This plan describes planned work only. No tests have been executed and no results are claimed. Items marked "Proposed" or "Not provided" require agreement before execution.*
