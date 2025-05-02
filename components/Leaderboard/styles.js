import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Returns rank-based color for podium/border
export const getRankColor = (rank) => {
  switch (rank) {
    case 1: return '#FFD700'; // Gold
    case 2: return '#C0C0C0'; // Silver
    case 3: return '#CD7F32'; // Bronze
    default: return '#ccc';  // Default grey
  }
};

export default StyleSheet.create({
  // Main screen wrapper
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    paddingTop: 40,
  },
  // Page title
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#003366',
  },
  // Horizontal scroll wrapper for top 3
  podiumContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 180,
  },
  // Individual top 3 card style
  podiumCard: {
    width: width * 0.55,
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  // Top 3 image
  podiumImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  // Rank number
  podiumRank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  // Club name for podium
  podiumName: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  // Score text on podium
  podiumScore: {
    fontSize: 14,
    color: '#fff',
  },
  // Card style for clubs ranked 4 and below
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 2,
    alignItems: 'center',
  },
  // Club logo on card
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  // Wrapper for card text content
  cardContent: {
    flex: 1,
  },
  // Club name on card
  clubName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Club score on card
  clubScore: {
    fontSize: 14,
    color: '#666',
  },
  // Achievements section box
  infoSection: {
    margin: 16,
    backgroundColor: '#e6f2ff',
    borderRadius: 10,
    padding: 12,
  },
  // Featured updates section
  featureSection: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff8e1',
    borderRadius: 10,
    padding: 12,
  },
  // Section headers
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#003366',
  },
  // Content inside sections
  infoText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
  // CTA button style
  button: {
    backgroundColor: '#003366',
    marginHorizontal: 40,
    marginBottom: 40,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  // Text inside CTA button
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
