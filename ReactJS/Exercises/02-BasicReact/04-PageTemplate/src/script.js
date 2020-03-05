const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
    </nav>
  );
}

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="border-top p-2">
      Template Demo © 2019
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

const App = () => {
  return (
    <Template>
      <h2>children of props<span> this is a span</span></h2>
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
