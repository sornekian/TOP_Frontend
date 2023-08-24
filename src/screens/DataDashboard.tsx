import {WebView} from 'react-native-webview';
import React from 'react';
import {View} from 'react-native';

interface DataDashboardProps {}

const DataDashboard: React.FC<DataDashboardProps> = props => (
  <WebView
    source={{
      uri: 'https://public.tableau.com/views/COVIDDashboard2_6/COVIDDBTester?:language=en-US&:display_count=n&:origin=viz_share_link',
    }}
    accessible={true}
    accessibilityLabel="Data Dashboard Page"
    accessibilityHint="Shows Covid data and trends from each state and across the US"
    accessibilityRole="header"
  />
);

export default DataDashboard;
