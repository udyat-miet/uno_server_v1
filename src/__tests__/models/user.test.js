const User = require('../../models/user');

describe('It should test User model', () => {
  describe('when validating first name', () => {
    const user = new User();

    test('It should succeed if first name has alphabets only', () => {
      user.name = { first: 'David' };
      const props = user.name.validateSync();
      expect(props.name.first).toBeUndefined();
    });

    describe('It should fail', () => {
      test('if first name is undefined', () => {
        user.name = {};
        const props = user.name.validateSync();
        expect(props.errors.first.message).toBe('First name is required!');
      });

      test('if first name is empty', () => {
        user.name = { first: '' };
        const props = user.name.validateSync();
        expect(props.errors.first.message).toBe('First name is required!');
      });

      test('if length of first name is less than 3', () => {
        user.name = { first: 'D@' };
        const props = user.name.validateSync();
        expect(props.errors.first.message).toBe('First name is too short!');
      });

      test('if length of first name is greater than 32', () => {
        user.name = {
          first: 'D@V!D Webb likes to keep his titles very long.'
        };
        const props = user.name.validateSync();
        expect(props.errors.first.message).toBe('First name is too long!');
      });

      test('if first name contains non alphabets', () => {
        user.name = { first: 'D@V!D ' };
        const props = user.name.validateSync();
        expect(props.errors.first.message).toBe(
          `${user.name.first} is not a valid first name!`
        );
      });
    });
  });

  describe('when validating last name', () => {
    const user = new User();

    test('It should succeed if last name has alphabets only', () => {
      user.name = { last: 'Webb' };
      const props = user.name.validateSync();
      expect(props.name.last).toBeUndefined();
    });

    describe('It should fail', () => {
      test('if last name is undefined', () => {
        user.name = {};
        const props = user.name.validateSync();
        expect(props.errors.last.message).toBe('Last name is required!');
      });

      test('if last name is empty', () => {
        user.name = { last: '' };
        const props = user.name.validateSync();
        expect(props.errors.last.message).toBe('Last name is required!');
      });

      test('if length of last name is less than 3', () => {
        user.name = { last: 'Jo' }; // sorry Jo
        const props = user.name.validateSync();
        expect(props.errors.last.message).toBe('Last name is too short!');
      });

      test('if length of last name is greater than 32', () => {
        user.name = {
          last: 'D@V!D Webb likes to keep his titles very long.'
        };
        const props = user.name.validateSync();
        expect(props.errors.last.message).toBe('Last name is too long!');
      });

      test('if last name contains non alphabets', () => {
        user.name = { last: ' W3bb' };
        const props = user.name.validateSync();
        expect(props.errors.last.message).toBe(
          `${user.name.last} is not a valid last name!`
        );
      });
    });
  });

  describe('when validating email', () => {
    test('It should succeed if email is a valid email address', () => {
      const user = new User({ email: 'dwebb@treadstone.gov' });
      const props = user.validateSync();
      expect(props.errors.email).toBeUndefined();
    });

    describe('It should fail', () => {
      const user = new User();
      test('if email is undefined', () => {
        const props = user.validateSync();
        expect(props.errors.email.message).toBe('Email is required!');
      });

      test('if email is empty', () => {
        user.email = '';
        const props = user.validateSync();
        expect(props.errors.email.message).toBe('Email is required!');
      });

      test('if length of email is less than 9', () => {
        user.email = 'dw@nsa.i';
        const props = user.validateSync();
        expect(props.errors.email.message).toBe('Email is too short!');
      });

      test('if length of email is greater than 128', () => {
        user.email = 'long email pls!'; // TODO implement automated token generation here
        const props = user.validateSync();
        expect(props.errors.email.message).toBe('Email is too long!');
      });

      test('if email is not a valid email address', () => {
        user.email = 'cewl$W@G.';
        const props = user.validateSync();
        expect(props.errors.email.message).toBe(
          `${user.email} is not a valid email!`
        );
      });
    });
  });

  describe('when validating username', () => {
    test('It should succeed if username is alphanumeric only', () => {
      const user = new User({ username: 'dwebb1' });
      const props = user.validateSync();
      expect(props.errors.username).toBeUndefined();
    });

    describe('It should fail', () => {
      const user = new User();

      test('if username is undefined', () => {
        const props = user.validateSync();
        expect(props.errors.username.message).toBe('Username is required!');
      });

      test('if username is empty', () => {
        user.username = '';
        const props = user.validateSync();
        expect(props.errors.username.message).toBe('Username is required!');
      });

      test('if length of username is less than 3', () => {
        user.username = 'dw';
        const props = user.validateSync();
        expect(props.errors.username.message).toBe('Username is too short!');
      });

      test('if length of username is greater than 16', () => {
        user.username = 'davidwebb_treadstone_nsa';
        const props = user.validateSync();
        expect(props.errors.username.message).toBe('Username is too long!');
      });

      test('if username is non alpha-numeric', () => {
        user.username = 'cew_sW9.';
        const props = user.validateSync();
        expect(props.errors.username.message).toBe(
          `${user.username} is not a valid username!`
        );
      });
    });
  });

  // TODO write tests on save(), update(), find()
});
