export default class OrganizationList {
    constructor() {
        this.result = [{name: 'aap'}, {name: 'noot'}, {name: 'mies'}];
    }

    getOrganizations() {
        return this.result;
    }
}