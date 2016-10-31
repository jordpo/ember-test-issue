export default function() {
  this.post('/oauth/token', () => {
    return {
      access_token: 'abc123',
      refresh_token: 'def456',
      token_type: 'bearer',
    };
  });
}
