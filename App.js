import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Constants} from 'expo';
import {NativeRouter, Route} from "react-router-native";

import StartScreen from './components/StartScreen';
import PlayLayout from './components/PlayLayout';
import Facility from './components/Facility';
import FacilityList from './components/FacilityList';
import {SAMPLE_FACILITIES} from './_sample_data';

const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    paddingTop: ${Constants.statusBarHeight};
    backgroundColor: black;
`;

export default class App extends Component {
  render() {
    const {match} = this.props;

    return (
      <NativeRouter>
        <Container>
          <Route exact path="/" component={StartScreen} />
          <Route path="/play/:category?" render={layoutProps => (
            <PlayLayout {...layoutProps}>
              <Route exact path="/play/:category" render={listProps => (
                <FacilityList
                  {...listProps}
                  facilities={SAMPLE_FACILITIES.filter(({category}) => layoutProps.match.params.category === category)}
                />
              )} />
            </PlayLayout>
          )} />
        </Container>
      </NativeRouter>
    );
  }
}
              // <Route exact path="/play/:category/:facility" render={facilityProps => (
              //   <Facility
              //     {...facilityProps}
              //     facility={SAMPLE_FACILITIES.find(({category}) => layoutProps.match.params.category === category)}
              //   />
              // )} />
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: 'black',
  // },
});
