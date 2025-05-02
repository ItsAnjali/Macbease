import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles, { getRankColor } from './styles'; // Import custom styles and helper function

// Static data for university clubs including name, score, and image URL
const clubsData = [
  { name: 'Academic Club', score: 98, image: 'https://img.icons8.com/color/96/scholarship.png' },
  { name: 'Music Club', score: 95, image: 'https://img.icons8.com/color/96/musical-notes.png' },
  { name: 'Dance Club', score: 90, image: 'https://img.icons8.com/color/96/dancing.png' },
  { name: 'Drama Club', score: 89, image: 'https://img.icons8.com/color/96/theatre-mask.png' },
  { name: 'Painting Club', score: 88, image: 'https://img.icons8.com/color/96/paint-palette.png' },
  { name: 'Guitar Club', score: 85, image: 'https://img.icons8.com/color/96/guitar.png' },
  { name: 'Literature Club', score: 84, image: 'https://img.icons8.com/color/96/book.png' },
  { name: 'Photography Club', score: 83, image: 'https://img.icons8.com/color/96/camera.png' },
];

// Component for individual club card in the leaderboard
const ClubCard = ({ name, score, rank, image }) => (
  <View style={[styles.card, { borderColor: getRankColor(rank) }]}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.clubName}>{name}</Text>
      <Text style={styles.clubScore}>{score} pts</Text>
    </View>
  </View>
);

// Main leaderboard screen component
const Leaderboard = () => {
  // Sort clubs based on their scores in descending order
  const sortedClubs = [...clubsData].sort((a, b) => b.score - a.score);
  const top3 = sortedClubs.slice(0, 3); // Top 3 for podium view
  const rest = sortedClubs.slice(3); // Remaining clubs for list view

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#003366" />
      <Text style={styles.title}>🎓 University Clubs Leaderboard</Text>

      {/* Horizontal scroll view for top 3 podium display */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.podiumContainer}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      >
        {top3.map((club, index) => (
          <View
            key={index}
            style={[styles.podiumCard, { backgroundColor: getRankColor(index + 1) }]}
          >
            <Image source={{ uri: club.image }} style={styles.podiumImage} />
            <Text style={styles.podiumRank}>#{index + 1}</Text>
            <Text style={styles.podiumName}>{club.name}</Text>
            <Text style={styles.podiumScore}>{club.score} pts</Text>
          </View>
        ))}
      </ScrollView>

      {/* Vertical scroll view for rest of the clubs and information sections */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* List the rest of the clubs */}
        {rest.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            score={club.score}
            rank={index + 4} // Adjusting rank after top 3
            image={club.image}
          />
        ))}

        {/* Section displaying club achievements */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>🌟 Explore Club Achievements</Text>
          <Text style={styles.infoText}>
            • Academic Club: Organized 3 national seminars.{"\n"}
            • Music Club: Won state-level band competition.{"\n"}
            • Dance Club: Held 5 major workshops.{"\n"}
            • Drama Club: 10 shows in inter-university fests.{"\n"}
            • Literature Club: Published university magazine.{"\n"}
            • Painting Club: Hosted 2 exhibitions.{"\n"}
            • Photography Club: Curated 4 contests.
          </Text>
        </View>

        {/* Section for updates and announcements */}
        <View style={styles.featureSection}>
          <Text style={styles.infoTitle}>📌 Featured Updates</Text>
          <Text style={styles.infoText}>
            • New club registration open!{"\n"}
            • Upcoming fest: ArtSplash 2025{"\n"}
            • Leadership summit for club heads in June.
          </Text>
        </View>

        {/* CTA button to join a club */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Redirecting to club joining form...')}
        >
          <Text style={styles.buttonText}>Join a Club Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Leaderboard;
