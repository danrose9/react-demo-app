import { graphConfig } from './graphConfig';

// Select DOM elements to work with
// const welcomeDiv = document.getElementById('WelcomeMessage');
const signInButton = document.getElementById('SignIn');
// const profileDiv = document.getElementById('profile-div');

export function showWelcomeMessage(username) {
  // Reconfiguring DOM elements
  // welcomeDiv.innerHTML = `Welcome ${username}`;
  signInButton.setAttribute('onclick', 'signOut();');
  signInButton.setAttribute('class', 'btn btn-success');
  signInButton.innerHTML = 'Sign Out';
}
