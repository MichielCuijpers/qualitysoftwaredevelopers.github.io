import OrganizationList from "../src/OrganizationList";

test('Returns a list', () => {
    const result = new OrganizationList().getOrganizations();

    expect(result).toHaveLength(3);
});