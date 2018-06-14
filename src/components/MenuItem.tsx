import React, { Component} from 'react';
import { Col, ListGroupItem, Row } from 'reactstrap';
import { IGameInfo } from '../sharedTypes';
import MenuItemButtons from './MenuItemButtons';
import SavedGameInfo from './SavedGameInfo';

interface IMenuItemProps {
    deleteGame: (index: number) => void;
    info: IGameInfo;
    index: number;
};

interface IMenuItemState {
    showButtons: boolean;
};

export default class MenuItem 
        extends Component<IMenuItemProps, IMenuItemState> {

    public state: IMenuItemState = {
        showButtons: false
    };

    public render () {
        const deleteGame = () => this.props.deleteGame(this.props.index);
        const mouseEnter = () => this.setState({showButtons: true});
        const mouseLeave = () => this.setState({showButtons: false})
        return (
            <ListGroupItem
                onMouseEnter={ mouseEnter }
                onMouseLeave={ mouseLeave }
                style={ {display:"inline-block", width: "100%", marginBottom: "-4px"} }>
                <Row>
                    <Col xs={8}>
                        <SavedGameInfo info={ this.props.info }/>
                    </Col>
                    <Col xs={4}>
                        <MenuItemButtons 
                            deleteGame={ deleteGame }
                            index={ this.props.index }
                            showButtons={ this.state.showButtons } />
                    </Col>
                </Row>
            </ListGroupItem>
        );
    }
}