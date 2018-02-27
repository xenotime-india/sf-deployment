import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import svg  from 'react-inlinesvg';

export const GlobalNav = (props) => {
    return (
        <div>
            <div className="slds-context-bar">
                <div className="slds-context-bar__primary">
                    <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                        <div className="slds-context-bar__icon-action">
                            <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
                                <span className="slds-icon-waffle">
                                  <span className="slds-r1"></span>
                                  <span className="slds-r2"></span>
                                  <span className="slds-r3"></span>
                                  <span className="slds-r4"></span>
                                  <span className="slds-r5"></span>
                                  <span className="slds-r6"></span>
                                  <span className="slds-r7"></span>
                                  <span className="slds-r8"></span>
                                  <span className="slds-r9"></span>
                                </span>
                                <span className="slds-assistive-text">Open App Launcher</span>
                            </button>
                        </div>
                        <span className="slds-context-bar__label-action slds-context-bar__app-name">
                            <span className="slds-truncate" title="App Name">SF Deployment</span>
                        </span>
                    </div>
                </div>
                <nav className="slds-context-bar__secondary" role="navigation">
                    <ul className="slds-grid">
                        <li className="slds-context-bar__item slds-is-active">
                            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
                                <span className="slds-assistive-text">Current Page:</span>
                                <span className="slds-truncate" title="Home">Home</span>
                            </a>
                        </li>

                        <li className="slds-context-bar__item">
                            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                                <span className="slds-truncate" title="Menu Item">Menu Item</span>
                            </a>
                        </li>
                        <li className="slds-context-bar__item">
                            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                                <span className="slds-truncate" title="Menu Item">Menu Item</span>
                            </a>
                        </li>
                        <li className="slds-context-bar__item">
                            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                                <span className="slds-truncate" title="Menu Item">Menu Item</span>
                            </a>
                        </li>

                    </ul>

                    <ul className="slds-grid">
                        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
                            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                                <span className="slds-truncate" title="Menu Item">Menu Item</span>
                            </a>
                            <div className="slds-context-bar__icon-action slds-p-left_none">
                                <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                                    <svg src="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" className="slds-button__icon" aria-hidden="true">
                                    </svg>
                                    <span className="slds-assistive-text">Open menu item submenu</span>
                                </button>
                            </div>
                            <div className="slds-dropdown slds-dropdown_right">
                                <ul className="slds-dropdown__list" role="menu">
                                    <li className="slds-dropdown__item" role="presentation">
                                        <a href="javascript:void(0);" role="menuitem" >
                                            <span className="slds-truncate" title="[object Object],Main action">
                                                <svg src="/assets/icons/utility-sprite/svg/symbols.svg#add" className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">

                                                </svg>Main action
                                            </span>
                                        </a>
                                    </li>
                                    <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                                        <span className="slds-text-title_caps">Menu header</span>
                                    </li>
                                    <li className="slds-dropdown__item" role="presentation">
                                        <a href="javascript:void(0);" role="menuitem" >
                                            <span className="slds-truncate" title="Menu Item One">Menu Item One</span>
                                        </a>
                                    </li>
                                    <li className="slds-dropdown__item" role="presentation">
                                        <a href="javascript:void(0);" role="menuitem" >
                                            <span className="slds-truncate" title="Menu Item Two">Menu Item Two</span>
                                        </a>
                                    </li>
                                    <li className="slds-dropdown__item" role="presentation">
                                        <a href="javascript:void(0);" role="menuitem" >
                                            <span className="slds-truncate" title="Menu Item Three">Menu Item Three</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
