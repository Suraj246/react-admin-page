import React from 'react'
import Switch from './Switch'


const Settings = () => {
    return (
        <div className="settings-container">
            <div className="close"><span><i className='bx bx-x-circle bx-md'></i></span></div>
            <div className="settings-dash">
                <div className="settings-head-left">
                    <span><i className='bx bxs-conversation settings-head-icon'></i></span>
                    <span>Audience Q&A</span>
                </div>
                <div className="settings-head-right">
                    <Switch />
                    <span><i className='bx bx-chevron-up bx-md' ></i></span>
                </div>
            </div>
            <div className="settings-ques">
                <div className="settings-q1">
                    <div className="q1">
                        <span>Moderation</span>
                        <span className="q1-msg">Easily review all questions before they go live</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Labels</span>
                        <span className="q1-msg">Categorize and filter questions</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Downvotes</span>
                        <span className="q1-msg">Enable downvoting of questions</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Replies</span>
                        <span className="q1-msg">Allow participants to reply to or comment on questions</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Anonymous questions</span>
                        <span className="q1-msg">Let your participants send anonymous questions</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Maximum question length</span>
                        <span className="q1-msg">Show number of votes instead of percentage</span>
                        <div className="q-num-items">
                            <span>160</span>
                            <span>240</span>
                            <span>300</span>
                        </div>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <div className="settings-q1">
                    <div className="q1">
                        <span>Close questions</span>
                        <span className="q1-msg">Prevent the participants from sending new questions to your event</span>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
            </div>
            <div className="settings-save">
                <button className="btn-save">save</button>
            </div>
        </div>
    )
}

export default Settings
