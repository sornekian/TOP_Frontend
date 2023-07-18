import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '../components/CheckBox';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
type Props = {};

// Define the ReportPage component

const ReportPage = (props: Props) => {
  // Define state variables for zip code and age
  const [zipCode, setZipCode] = useState('');
  const [age, setAge] = useState('');
  const [isCheckboxSelected, setCheckboxSelection] = useState(false);

  console.log('Render: ', isCheckboxSelected);

  const handleCheckChanges = () => {
    setCheckboxSelection(prevState => !prevState);
    console.log('handleCheckChanges: ', isCheckboxSelected);
  };

  // Function to handle zip code changes
  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };
  // Function to handle age changes
  const handleAgeChange = (value: string) => {
    setAge(value);
  };
  useEffect(() => {
    console.log('checkbox selection: ', isCheckboxSelected);
  }, [isCheckboxSelected]);
  return (
    <SafeAreaView className="min-w-screen">
      <ScrollView>
        <View className="h-[90] border-b-4 border-slate-200 flex-row my-6">
          <TouchableOpacity className="mt-2 ml-4">
            <Icon name="arrowleft" size={30} color="#000" className="" />
          </TouchableOpacity>
          <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
            Report COVID-19 Test Result
          </Text>
        </View>
        <View className="mx-auto my-auto">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-9">
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Negative</Text>
            </Pressable>
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Positive</Text>
            </Pressable>
          </View>
          <View className="w-[342]">
            <TextInputField
              label="Zip Code*"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder=""
            />
            <TextInputField
              label="Age*"
              value={age}
              onChange={handleAgeChange}
              placeholder=""
            />
            <Text className="font-bold my-2">Gender</Text>
            <DropDownPicker className="my-2 border-2 border-black rounded-lg" />
            <Text className="font-bold my-2">Race</Text>
            <DropDownPicker className="my-2 border-2 border-black rounded-lg" />
            <Text className="font-bold my-2">Ethnicity</Text>
            <DropDownPicker className="my-2 border-2 border-black rounded-lg" />
          </View>
          <View className="flex-row justify-center my-6">
            <CheckBox
              isSelected={isCheckboxSelected}
              handleCheckChanges={handleCheckChanges}
            />
            <Text className="font-bold mt-1">
              I agree to share my results with the CDC
            </Text>
          </View>
        </View>
        <View className="mb-14">
          {/* <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4] mt-6 mb-8 mx-auto">
            <Text className="text-lg font-bold">Report</Text>
          </TouchableOpacity> */}
          <Button
            onPress={() => console.log('pressed')}
            innerText="Report"
            bgColor="bg-[#B4B4B4]"
            textColor="text-black"
            border={true}
            borderColor="border border-4"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
