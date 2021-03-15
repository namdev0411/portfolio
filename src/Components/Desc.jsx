import React from 'react';
import { Grid ,Typography} from "@material-ui/core";
import TitleField from './TitleField';
import CreateIcon from '@material-ui/icons/Create';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import './Desc.scss';
import {Element} from 'react-scroll';

const Desc = () => {
    return (
        <Grid container className="desc">
            <Element name="ido"/>
            <TitleField text="What I Can Do"/>
            <Grid container>
                <Grid container item sm={6} className="desc-item">
                    <div>
                        <span className="desc-item-icon">
                            <CreateIcon/>
                        </span>
                        <Typography className="desc-title" variant="h4" display="inline">
                            Copywrite
                        </Typography>
                        <ul className="desc-text">
                            <li>マーケティングや広告のためにページを作成します。</li>
                        </ul>
                    </div>
                </Grid>
                <Grid container item sm={6} className="desc-item">
                    <div>
                        <span className="desc-item-icon">
                            <DesktopWindowsIcon/>
                        </span>
                        <Typography className="desc-title" variant="h4"　display="inline">
                            Design
                        </Typography>
                        <ul className="desc-text">
                            <li>WEBのUX UIの作業を行います。Responsiveで色々なフラットフォームで
                                綺麗に見ることが出来ます。
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid container item sm={6} className="desc-item">
                    <div>
                        <span className="desc-item-icon">
                            <PhoneIphoneIcon/>
                        </span>
                        <Typography className="desc-title" variant="h4" display="inline">
                            App                        
                        </Typography>
                        <ul className="desc-text">
                            <li>
                                React-nativeでAndroidとIOSのAppを作ります。
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Desc;
