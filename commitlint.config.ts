export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'ci']],
    'type-case': [0],
    'scope-case': [0],
    'subject-empty': [0],
    'type-empty': [0],
    'subject-case': [0],
  },
}
