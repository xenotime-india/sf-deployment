import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import svg  from 'react-inlinesvg';

export const LoginBox = (props) => {
    return (
        <article className="slds-card" style={{width:'400px', background: '#fff', margin: '40px auto', padding: '40px'}}>

            <div className="slds-card__body slds-card__body_inner"><img src='/assets/images/salesforce.png' style={{width:'400px'}}/></div>
            <footer className="slds-card__footer">
                <button className="slds-button slds-button_neutral">
                    <svg src="/assets/icons/utility-sprite/svg/symbols.svg#download" className="slds-button__icon slds-button__icon_left" aria-hidden="true">

                    </svg>Login with Salesforce</button>
            </footer>
        </article>

    )
}
