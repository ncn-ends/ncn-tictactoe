/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Badge, Button } from '@react-native-material/core';
import React, { useState, type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Playboard } from './src/components/Playboard';

const Section: React.FC<
    PropsWithChildren<{
        title: string;
    }>
> = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App = () => {
    const [count, setCount] = useState<number>(0);

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const handlePress = () => {
        setCount(prev => prev + 1);
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            {/* <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            /> */}
            {/* <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                        <ReloadInstructions />
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions />
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                    <LearnMoreLinks />
                </View>
            </ScrollView> */}
            <View>
                <Text>Hello</Text>
                <Button title="Click Me" style={{alignSelf: 'center'}} onPress={() => handlePress()}/>
                <Badge label={count} style={{alignSelf: 'center'}} />
                <Playboard />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
