Github action

# github-actions

Workflow, Jobs & steps:-

workflows are attached to git repos, and we can have multiple of them within a workflow there are many jobs each job have step that execute one after another.
steps example :- download code, instal dependency and run test.

Workflow are triggered upon Events (manual or when commit is pushed)


Jobs :-
Define a Runner (execution	environment)[ machine and OS used to execute these steps]. With GitHub action these runner can be predefined like linux, window and Mac.
Multiple Jobs run parallel by default which can be configured to sequential order.
We can also have conditional job

Steps :-
Execute a shell script or an Action(predefined script).
We ca use custom or third-party actions.
Steps are executed in order and can be conditional.  
Actions -> simple workflow -> configure
 All action are store in this path repository/.github/workflows/file.yml



Repository related:-
Push :- pushing a commit
pull_request action (opened,closed,...)
create A branch or tag was created
fork Repository was forked
issues An issues was opened deleted,...
issue_comment issue or pull request comment action
watch Repository was starred
discussion Discussion action (created, deleted,...)

Other:-
workflow_dispatch :- Manually trigger workflow.
repository_dispatch :- REST API request triggers workflow.
schedule :- Workflow is schedule.
workflow_call :- can be called by other workflow.



Actions:-
A (custom) application that perform a (typically complex) frequently repeated task.
e.g:- fetching the code from repository and downloading on the runner machine.
https://github.com/marketplace

alternative command "run"
A (typically simple) shell command that's defined by you.


-> Event :-
https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows
1] Controlling workflow Execution with event filter.(e.g :- not all push trigger workflow)
2] Detailed Control with Activity Types.


Give more detail control over when a workflow will be triggered.
A] Activity Types :-
1]opened ,2]closed, 3]edited

B] Filters:-
Push Event :- Filter based on target branch. (only push to main branch will trigger workflow)

A note about fork pull request workflows.
By default, pull Requests based on forks do Not trigger a workflow.
Because Everyone can fork & open pull requests, malicious workflow runs and excess could be caused.
Fist time contributor must be approved manually.sub-sequent pull request will trigger workflow automatically since approved fist one.


-> Cancelling and skipping workflow Runs.

Cancelling :-
By default, workflows get cancelled if job fail. (but there is way to execute subsequent workflow when one fail)
By default, a job fails if at least one step fails.
You can also cancel workflow manually

Skipping :-
By default, all matching events start a workflow
Exceptions for "push" & "pull_request"

In commits
git commit -m "added comment [skip actions]"
git commit -m "added comment [skip ci]"

-> job Artifacts & Outputs :-

A] job Artifacts
When a job generates assets (e.g., website files for web hosting, mobile app packages for App Store distribution, 
binary executables for desktop applications, or test logs), these artifacts can be:
1. Downloaded manually via GitHub UI or REST API
2. Used in other jobs or workflows via GitHub Actions

B] job Outputs :-
Simple Values string or number that a job output so that we might use in other subsequent jobs.