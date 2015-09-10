var options = {
    thumbnailData: [
        {
            title: 'Messages',
            number: 33,
            header: 'John Smith',
            description: 'Critical thinking is clear, reasoned thinking involving critique. Its details vary amongst those who define it. According to Beyer (1995), critical thinking means making clear, reasoned judgments. During the process of critical thinking, ideas should be reasoned and well thought out/judged.',
            imageUrl: 'http://gslinn.com/images/titles/qfox.gif'
        },
        {
            title: 'Messages',
            number: 25,
            header: 'Mike West',
            description: 'History (from Greek ἱστορία, historia, meaning "inquiry, knowledge acquired by investigation") is the study of the past, particularly how it relates to humans.',
            imageUrl: 'http://gslinn.com/images/titles/qfox.gif'
        },
    ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.target'));
var Badge = React.createClass({displayName: "Badge",
    render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
    return   React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
React.createElement("div", {className: "caption"}, 
React.createElement("h3", null, this.props.header), 
React.createElement("p", null, this.props.description), 
React.createElement("p", null, 
React.createElement(Badge, {title: this.props.title, number: this.props.number})
)
)
)

}
});
var Thumbnail = require('thumbnail');

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
        list
        )
    }
});