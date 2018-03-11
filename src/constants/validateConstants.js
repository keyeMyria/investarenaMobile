/* eslint no-useless-escape: 0 */
export const validateRegistrationSignIn = {
    email: /^((([a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+(\.[a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+)*)|("[^"]*"))@([a-zA-Z0-9]+(_?-?[a-zA-Z0-9]+)*)(\.([a-zA-Z0-9]+(_?-?[a-zA-Z0-9]+)*)+)*(\.([a-zA-Z0-9]+(_?-?[a-zA-Z0-9]+)*){2,})){1,100}$/,
    password: /^(?=^.{5,128}$)(?=.*\d)(?=.*[^\d]).*$/
};
