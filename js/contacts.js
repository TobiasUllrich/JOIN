async function initContacts() {
    await init();
    renderProfileImage();
    findOutConacts();
    renderCategoriesInHTML();
    renderAssignableMembersInHTML();
}