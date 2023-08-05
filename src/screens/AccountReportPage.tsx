import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';
import CircleBtn from '../components/CircleBtn';
import { useAuth } from '../context/AuthContext';
import ApiService from '../services/ApiService';


type Props = {};

interface ApiResponse {
  data: {
    user: {
      email: string,
      DOB: string;
      state: string;
      ZIP: string;
      firstName: string;
      gender: string;
      ethnicity: string;
      race: string;
      id: number;
      username: string;
      passwordDigest: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

const AccountReportPage = (props: Props) => {

  const [covidInfo, setCovidInfo] = useState<ApiResponse | null>(null);

  const { userId } = useAuth();
  const [formState, setFormState] = useState<any | undefined>({
    result: false,
    userId: userId,
    ZIP: '',
    state: '',
    gender: '',
    race: '',
    ethnicity: '',
  });

  const handleChange: any = (field: string, value: string) => {
    setFormState({...formState, [field]: value});
  };
  

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    ApiService.createTestWithAccount(formState)
      .then((res: any) => setCovidInfo(res.data.user))
      .catch(error => {
        console.log('Create Covid Message: ' + error);
      });
    console.log('Covid Info: ' + JSON.stringify(formState));
  };
 
  // writing comment to push changes from earlier

  return (
    <SafeAreaView className="min-w-screen">
      <ScrollView>
        <TopNavBar
          textSize="xl"
          fontFamily=""
          haveProgress={false}
          textValue="Report COVID-19 Test Result"
        />

        {/* Page container */}
        <View className="justify-center mx-auto max-w-sm">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>

          {/* Result Buttons Container */}
          <View className="justify-center space-x-4 flex-row my-8">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                updateForm={value => handleChange('result', false)}
                text="Negative"
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize='base'
                value={true}
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                updateForm={value => handleChange('result', true)}
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize='base'
                value={false}
              />
            </View>
          </View>

          {/* Text input fields container */}
          <View className="">
            <TextInputField
              label="State*"
              value={formState.state}
              onChange={value => handleChange('state', value)}
              placeholder="Enter your state"
            />
            <TextInputField
              label="Zip Code*"
              value={formState.ZIP}
              onChange={value => handleChange('ZIP', value)}
              placeholder="Enter your ZIP code"
            />
          </View>

          {/* Submit button */}
          <View className="my-4">
            <Button
              onPress={handleSubmit}
              innerText="Submit"
              textColor="text-white"
              bgColor="bg-black"
              border={true}
              width='80'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountReportPage;