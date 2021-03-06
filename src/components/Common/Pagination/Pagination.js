import styles from './pagination.css';
import React, { PropTypes } from 'react';

export default class Pagination extends React.Component {
    static propTypes = {
        buttonCnt: PropTypes.number,
        max: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
        onChangePage: PropTypes.func.isRequired
    }

    static defaultProps = { 
        buttonCnt: 8 // 显示的最大按钮数，必须为8的倍数
    };

    handleClick = e => {
        e.preventDefault();
        var target = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target;
        let page = target.getAttribute('data-page');
        if (page) this.props.onChangePage(+page);
    }

    renderPageination() {
        var { current, max, buttonCnt } = this.props;
        var pre = current - 1;
        var next = current + 1;
        var res = [];
        var key = 0;
        if (max < 2) return null;
        
        if (current === 1) {
            res.push(<li className="disabled" key={ key++ }><a href="javascript:;"><span>«</span></a></li>);
        } else {
            res.push(<li key={ key++ }><a href="javascript:;" data-page={ pre }><span>«</span></a></li>);
        }

        if (max <= buttonCnt) {
            for (let i = 1 ; i <= max ; i++) {
                if (i === current) {
                    res.push(<li className="active" key={ key++ }><a href="javascript:;">{ i }</a></li>);
                } else {
                    res.push(<li key={ key++ }><a href="javascript:;" data-page={ i }>{ i }</a></li>);
                }  
            }
        } else {
            if (current === 1) {
                res.push(<li className="active" key={ key++ }><a href="javascript:;">1</a></li>);
            } else {
                res.push(<li key={ key++ }><a href="javascript:;" data-page="1">1</a></li>);
            }
                
            let inter = parseInt(buttonCnt / 2);
            let halfInter = parseInt(inter / 2);
            if (current > inter) res.push(<li key={ key++ }><a href="javascript:;">...</a></li>);

            let start = halfInter;
            if (current > halfInter + 1) start = current - halfInter;
            let end = start + inter;
            if (max - current <= halfInter) {
                end = max - 1;
                start = end - inter;
            }
            for (let i = start; i <= end; i++) {
                if (i === current) {
                    res.push(<li className="active" key={ key++ }><a href="javascript:;">{ i }</a></li>);
                } else {
                    res.push(<li key={ key++ }><a href="javascript:;" data-page={ i }>{ i }</a></li>);
                }
            }

            if (max - current > halfInter + 1) res.push(<li key={ key++ }><a href="javascript:;">...</a></li>);
            if (max === current) {
                res.push(<li className="active" key={ key++ }><a href="javascript:;">{ max }</a></li>);
            } else {
                res.push(<li key={ key++ }><a href="javascript:;" data-page={ max }>{ max }</a></li>);
            }
        }
        if (max === current) {
            res.push(<li className="disabled" key={ key++ }><a href="javascript:;"><span>»</span></a></li>);
        } else {
            res.push(<li key={ key++ }><a href="javascript:;" data-page={ next }><span>»</span></a></li>);
        }

        return res;
    }

    render() {
        return (
            <div className="page">
                <ul className="pagination" onClick={ this.handleClick }>
                    { this.renderPageination() }
                </ul>
            </div>
        );
    }
}
