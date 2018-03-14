import React from 'react'

//loading
var Pop = React.createClass({

	
	componentDidMount(){
		 
		 //console.log(this.props.pop);
	},

  render:function(){
  	
    return (
      <div className={this.props.isShow ? "hpl_pop" : "hpl_pop hide"}>
       	<div className="pop_bg"></div>
       	<div className="pop_cont">
       		<div className="pop_tit">
       			<p className="pop_h3">{this.props.pop.title}</p>
       			<p className="pop_txt">{this.props.pop.titTxt}</p>
       		</div>
       		<div className="pop_btn">
       			
       				{this.props.pop.isOneSure ? <span className="one_sure" onClick={this.props.pop.cancleClick}>{this.props.pop.sureTxt}</span> : <div>
   						<span className="pop_cancel" onClick={this.props.pop.cancleClick}>{this.props.pop.cancleTxt}</span>
   						<span className="pop_sure" onClick={this.props.pop.sureClick}>{this.props.pop.sureTxt}</span>
   					
   					</div>}       			
       		</div>
       	</div>
      </div>
    )
  }
});

export default Pop