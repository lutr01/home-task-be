Feature: User

  Scenario: Validation of user email
    Then I get users data and verify users email format is correct

  Scenario: Validation of user posts fields formats
    Then I get users posts and verify fields formats

  Scenario: Making a valid post
    Then I create a post with the valid data