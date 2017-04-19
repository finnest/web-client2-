import React from 'react'

const Transaction = React.createClass ({
	render () {
		const { icon, tag, amount, date } = this.props.transaction
		return (
			<div className='transaction'>
				<img src={`/public/img/icons/${icon}`}
					/>
				<span className='transactiontag'>{tag}</span>
				<span className='transactiondate'>{date}</span>
				<span className='transactionamount'>{amount}</span>
			</div>
		)
	}
})

export default Transaction