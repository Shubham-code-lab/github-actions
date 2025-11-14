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
All action are store in this pathrepository/.github/workflows/file.yml



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