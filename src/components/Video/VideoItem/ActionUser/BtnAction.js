import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import classNames from "classnames/bind";
import "@lottiefiles/lottie-player";
import { useEffect, useContext, memo } from "react";


import styles from "./BtnAction.module.scss";
import { CommentIcon, HeartIcon, ShareIcon } from "@/components/Icon/Icon";
import Context from "@/store/Context";
import { action } from "@/store";

const cx = classNames.bind(styles);

function ButtonAction({ data, isHeart }) {
    const [isLike, setLike] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);

    const handleLike = () => {
        setLike(!isLike);
        // eslint-disable-next-line no-unused-expressions
        isLike ? isHeart === true : isHeart === false
    }
    useEffect(() => {
        isHeart ? setLike(true) : setLike(false);
    }, [isHeart]);



    return (
        <div className={cx("action-item_container")}>
            <button className={cx("btn-action")} >
                <span className={cx("action-icon")} onClick={handleLike}>
                    {isLike && isHeart ? <div className={cx("btn-animaction")}>
                        <lottie-player
                            autoplay
                            direction={2}
                            keepLastFrame={true}
                            mode="normal"
                            src="https://assets3.lottiefiles.com/packages/lf20_6z3m9mpw.json"
                            style={{ width: "60px" }}
                        >
                        </lottie-player>
                    </div> : <HeartIcon />}
                </span>
                <strong className={cx("strong-text")}>{data.likes_count}</strong>
            </button>
            <button className={cx("btn-action")}>
                <span className={cx("action-icon")} onClick={() => {
                    dispatch(action.openModal(data, true));
                    // eslint-disable-next-line no-restricted-globals
                    history.pushState(null, '', `/@${data.user.nickname}/video/${data.id}`)

                }}>
                    <CommentIcon />
                </span>
                <strong className={cx("strong-text")}>{data.comments_count}</strong>
            </button>
            <button className={cx("btn-action")}>
                <span className={cx("action-icon")}>
                    <ShareIcon />
                </span>
                <strong className={cx("strong-text")}>{data.shares_count}</strong>
            </button>
        </div>
    );
}

export default memo(ButtonAction);