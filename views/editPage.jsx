
var React = require('react');
var DefaultLayout = require('./layouts/default');

class editPage extends React.Component {
  render() {
    return (
   <DefaultLayout  title="Edit Recipe">
<div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
<form className="mt-5" method="POST" action="/recipes">
  <div className="form-group">
    <label for="title">Title</label>
    <input type="text" className="form-control" name="title" value={this.props.title}/>
  </div>
  <div className="form-group">
    <label for="ingredients">Ingredients</label>
    <textarea className="form-control" name="ingredients" rows="3" value={this.props.ingredients}></textarea>
  </div>
  <div className="form-group">
    <label for="instructions">Instructions</label>
    <textarea className="form-control" name="instructions" rows="3" value={this.props.instructions}></textarea>
  </div>
    <button type="submit" className="btn btn-primary btn-customized">Edit</button>
</form>
        </div>
    </div>
</div>
 </DefaultLayout>
    );
  }
}

module.exports = editPage;