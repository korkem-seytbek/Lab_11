import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
// Импортируем созданные компоненты [cite: 742]
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Настройка статус-бара */}
      <StatusBar barStyle="dark-content" />
      
      {/* ScrollView должен быть с большой буквы  */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* ProfileCard с большой буквы [cite: 539, 740] */}
        <ProfileCard 
          name="Коркем" 
          role="React Native Developer" 
          bio="Студент, изучающий разработку мобильных приложений на базе Expo и React Native."
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" 
        />

        {/* ContactSection с большой буквы [cite: 602, 741] */}
        <ContactSection />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingVertical: 20,
  },
});