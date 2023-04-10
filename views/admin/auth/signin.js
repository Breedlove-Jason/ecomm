const layout = require('../layout');

module.exports = () => {
  return layout({ content:` 
       <div>
        <form method="POST">
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <input
            name="passwordConfirmation"
            placeholder="password confirmation"
          />
          <button>Sign In</button>
        </form>
      </div>
  `})
};
