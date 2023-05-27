import React from 'react';
import cx from 'classnames';

import css from './style/index.module.scss';

const Bans = props => (
    <div className={cx(css.Ban)}>
        <div className={cx(css.BanImage, {
            [css.Active]: props.isActive
        })}>
            <div className={cx(css.Line)}></div>
            <img src={props.champion.squareImg} alt="" />
        </div>
    </div>
);

export default Bans;
