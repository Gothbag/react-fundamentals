var user = {
	name: 'Tyler Gerardo McGinnis',
	username: 'tylermcginnis',
	image: 'https://avatars2.githubusercontent.com/u/2933430?v=3&s=400'
}

var ProfilePic = function(props) {
	return <img src={props.imageUrl} style={{height:100, width:100}}/>
}

var Link = React.createClass({
	changeUrl: function () {
		window.location.href = this.props.href;
	},
	render: function () {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeUrl}>
				{this.props.children}
			</span>
		);
	}
});

var ProfileLink = function(props) {
	return (
		<div>
			<Link href={'https://www.github.com/' + props.username}>
				{props.username}
			</Link>
		</div>
	);
}

var ProfileName = function (props) {
	return (
		<div>{props.name}</div>
	);
}

var Avatar = function (props) {
	return (
		<div>
			<ProfilePic imageUrl={props.user.image}/>
			<ProfileName name={props.user.name}/>
			<ProfileLink username={props.user.username}/>
		</div>
	);
}