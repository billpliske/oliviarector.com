import { defineStore } from 'pinia';

export const useStore = defineStore('myartevents', {
	state: () => {
		return {
			user: '',
			access: '',
			email: '',
			userID: '',
			isLoggedIn: false,
			isMenuOpen: false,
			isEventNavOpen: false,
			isContestNavOpen: false,
			isEditEventNavOpen: false,
			isEditContestNavOpen: false,
			isEventFilterOpen: false,
			isContestFilterOpen: false,
			isLogoutSliderOpen: false,
			isEventFilterReminderOn: true,
			isContestFilterReminderOn: true,
			currentEventID: '',
			currentContestID: '',
			filterSelectedState: '',
			selectedCountryID: null,
			selectedState: '',
			selectedStartDate: '',
			selectedEndDate: '',
			selectedContestState: '',
			selectedContestStartDate: '',
			selectedContestEndDate: '',
			isFavEventsMenuSelected: true,
			isFavContestsMenuSelected: false,
			formData: {
				eventName: '',
				eventDescription: '',
				eventStartDate: null,
				eventEndDate: null,
				eventCountry: '',
				eventCountryID: null,
				eventCity: '',
				eventState: '',
				eventWebsite: '',
				eventEmail: '',
				eventInstagram: '',
				eventFacebook: '',
				contestName: '',
				contestDescription: '',
				contestDeadlineDate: null,
				contestDeadlineTime: null,
				contestCountry: '',
				contestCountryID: null,
				contestCity: '',
				contestState: '',
				contestWebsite: '',
				contestEmail: '',
				contestInstagram: '',
				contestFacebook: ''
			}
		};
	},
	// when you first need to manipulate the state
	getters: {},
	// put async before function name, if needed
	actions: {
		updateUser(sentUser) {
			this.user = sentUser;
		},
		updateAccess(sentAccess) {
			this.acess = sentAccess;
		},
		updateEmail(sentEmail) {
			this.email = sentEmail;
		},
		updateUserID(sentUserID) {
			this.userID = sentUserID;
		},
		updateIsLoggedIn(newValue) {
			this.isLoggedIn = newValue;
		},
		updateArtistInFauna(newValue) {
			this.artistInFauna = newValue;
		},
		updateEventFilterReminder() {
			this.isEventFilterReminderOn = false;
		},
		updateContestFilterReminder() {
			this.isContestFilterReminderOn = false;
		},
		updateEventCountry(country) {
			this.formData.eventCountry = country;
		},
		updateCountryID(countryID) {
			this.formData.eventCountryID = countryID;
		},
		updateEventState(state) {
			this.formData.eventState = state;
		},
		updateEventStateID(stateID) {
			this.formData.eventStateID = stateID;
		},
		updateContestCountryName(country) {
			this.formData.contestCountry = country;
		},
		updateContestCountryID(countryID) {
			this.formData.contestCountryID = countryID;
		},
		updateContestStateName(state) {
			this.formData.contestState = state;
		},
		updateContestStateID(stateID) {
			this.formData.contestStateID = stateID;
		},
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		toggleEventNav() {
			this.isEventNavOpen = !this.isEventNavOpen;
		},
		toggleContestNav() {
			this.isContestNavOpen = !this.isContestNavOpen;
		},
		toggleEditEventNav() {
			this.isEditEventNavOpen = !this.isEditEventNavOpen;
		},
		toggleEditContestNav() {
			this.isEditContestNavOpen = !this.isEditContestNavOpen;
		},
		toggleEventFilter() {
			this.isEventFilterOpen = !this.isEventFilterOpen;
		},
		toggleContestFilter() {
			this.isContestFilterOpen = !this.isContestFilterOpen;
		},
		toggleFavEventsMenu() {
			this.isFavEventsMenuSelected = !this.isFavEventsMenuSelected;
		},
		toggleFavContestsMenu() {
			this.isFavContestsMenuSelected = !this.isFavContestsMenuSelected;
		},
		toggleLogoutSlider() {
			this.isLogoutSliderOpen = !this.isLogoutSliderOpen;
		},
		updateCurrentEventID(sentID) {
			this.currentEventID = sentID;
		},
		updateCurrentContestID(sentID) {
			this.currentContestID = sentID;
		},
		updateSelectedCountryID(sentID) {
			this.selectedCountryID = sentID;
		},
		updateSelectedState(state) {
			this.selectedState = state;
		},
		updateSelectedStartDate(startDate) {
			this.selectedStartDate = startDate;
		},
		updateSelectedEndDate(endDate) {
			this.selectedEndDate = endDate;
		},
		updateSelectedContestState(state) {
			this.selectedContestState = state;
		},
		updateSelectedContestStartDate(contestStartDate) {
			this.selectedContestStartDate = contestStartDate;
		},
		updateSelectedContestEndDate(contestEndDate) {
			this.selectedContestEndDate = contestEndDate;
		},
		resetFormData() {
			this.formData.eventName = '';
			this.formData.eventDescription = '';
			this.formData.eventStartDate = null;
			this.formData.eventEndDate = null;
			this.formData.eventCity = '';
			this.formData.eventCountry = '';
			this.formData.eventCountryID = null;
			this.formData.eventState = '';
			this.formData.eventWebsite = '';
			this.formData.eventEmail = '';
			this.formData.eventInstagram = '';
			this.formData.eventFacebook = '';
			this.formData.contestName = '';
			this.formData.contestDescription = '';
			this.formData.contestDeadlineDate = null;
			this.formData.contestDeadlineTime = null;
			this.formData.contestCountry = '';
			this.formData.contestCountryID = null;
			this.formData.contestCity = '';
			this.formData.contestState = '';
			this.formData.contestWebsite = '';
			this.formData.contestEmail = '';
			this.formData.contestInstagram = '';
			this.formData.contestFacebook = '';
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				//     // This store will be persisted under the wishlistkid 'key' in localStorage.
				key: 'myartevents',
				storage: localStorage
			}
		]
	}
});
