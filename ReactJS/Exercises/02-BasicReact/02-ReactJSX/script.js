const greeting = (user) => {

  if (user) {
    let greeting;
    switch (user.language) {
      case 'es':
        greeting = 'Holla';
        break;
      case 'es':
        greeting = 'Hallo';
        break;
      default:
        greeting = 'Hello';
    }

    return (
      <h1 className={`greeting ${user.language}`}>
        {`${greeting} ${user.firstName} ${user.lastName}`}
      </h1>
    );
  }

  return <h1 className="greeting">Hello friend</h1>;
}


const user = {
  language: 'es',
  firstName: 'javier',
  lastName: 'bandela'
}

const element = greeting(user);

ReactDOM.render(
  element,
  document.getElementById('root')
);
