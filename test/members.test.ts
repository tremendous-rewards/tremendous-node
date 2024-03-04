import { expect, test } from 'vitest';
import { Configuration, Environments, MembersApi } from '../dist';

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new MembersApi(config);

test("list members", async () => {
  const members = await api.listMembers().then(({ data }) => data.members);

  expect(members.length).toBeGreaterThan(0);

  members.slice(0, 10).forEach(member => {
    expect(member).toHaveProperty("id");
    expect(member).toHaveProperty("email");
    expect(member).toHaveProperty("name");
    expect(member).toHaveProperty("role");
  });
});
