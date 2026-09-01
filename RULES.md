# Critical Production Rules

### Never invent business logic

Do not add, assume, infer, or fabricate business rules that are not explicitly specified in:

* the task description
* existing code behavior
* an authoritative product/spec document
* an API contract
* a database schema with clearly established semantics

If behavior is not established, preserve the existing behavior and ask for clarification rather than inventing it.

### Verification must never be assumed

Never mark any entity as `verified`, `approved`, `validated`, `trusted`, `paid`, `completed`, `active`, or equivalent unless the codebase contains an explicit verification/authorization mechanism that establishes that state.

For example:

* Do NOT automatically set `gstVerified = true` merely because a GST number is present.
* Do NOT treat successful format validation as government/business verification.
* Do NOT treat an API response as verification unless the API is explicitly a verification authority.
* Do NOT create "temporary" or "default" verified states to make a workflow function.

Formatting/validation ≠ verification.

### Production safety rule

When implementing a production feature, prefer:

1. existing behavior
2. explicitly specified behavior
3. established domain rules already present in the codebase

Never fill gaps with plausible-sounding product behavior.

If a required business rule is missing, STOP at that boundary and report the ambiguity.

### State-changing operations

Before changing any persistent business state, identify:

* what event authorizes the transition
* what system/user is authorized to perform it
* what evidence establishes the transition
* whether the transition is reversible

If those are not established, do not implement the transition.

### No "helpful" assumptions

Do not add functionality simply because it:

* seems normal for a production application
* is common in similar SaaS products
* makes the UI/workflow look complete
* prevents an error
* makes tests pass
* makes the implementation simpler

The requirement is the authority, not convention.

### When uncertain

Use this rule:

> UNKNOWN REQUIREMENT → DO NOT IMPLEMENT

Instead, leave the behavior unchanged and explicitly report:

`Ambiguous business rule: <description>. I did not implement an assumption.`

### Before finishing

For every business-state mutation, verify:

`Where did this behavior come from?`

If there is no concrete source in the task/spec/codebase, remove it.
