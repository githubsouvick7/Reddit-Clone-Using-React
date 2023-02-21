import React, { useEffect, useState } from 'react'
import './List.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Data } from './Data';

const List = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            {
                Data.map(item => {
                    const { vote, description } = item;
                    const plusCount = () => {
                        setCount(vote + 1)
                    }
                    const minCount = () => {
                        if (vote != 0) {
                            setCount(vote - 1);
                        }
                    }
                    return (
                        <div className="list">
                            <div className="sidebox">
                                <Tippy content={<p>UpVote</p>}>
                                    <i class="fa-solid fa-arrow-up" onClick={plusCount}></i>
                                </Tippy>
                                <span>{vote}</span>
                                <Tippy content={<p>DownVote</p>}>
                                    <i class="fa-solid fa-arrow-down" onClick={minCount}></i>
                                </Tippy>
                            </div>
                            <div className="box">
                                <div className='title'>
                                    <div>
                                        <button className='join'>join</button>
                                        <i class="fa-solid fa-eye-slash"></i>
                                    </div>

                                </div>
                                <div className='posttext'>
                                    <h4>{description}</h4>
                                </div>
                                <div className='like'>
                                    <div><i class="fa-solid fa-comment"></i> Comment</div>
                                    <div><i class="fa-solid fa-share"></i> Share</div>
                                    <div><i class="fa-solid fa-bookmark"></i> Save</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;