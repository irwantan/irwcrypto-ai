import { View, Text } from 'react-native';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function AnimatedSplash({ onFinish }: { onFinish: () => void }) {
  // Animation values
  const scale = useSharedValue(0);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const shimmer = useSharedValue(-200);

  useEffect(() => {
    // Logo scale animation
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });

    // Rotation animation
    rotate.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1, // infinite
      false
    );

    // Fade in
    opacity.value = withSequence(
      withTiming(1, { duration: 500 }),
      withTiming(1, { duration: 2500 }),
      withTiming(0, { duration: 500 })
    );

    // Shimmer effect
    shimmer.value = withRepeat(
      withTiming(400, {
        duration: 1500,
        easing: Easing.ease,
      }),
      -1,
      false
    );

    // Finish splash after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const animatedRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
    opacity: opacity.value,
  }));

  const animatedShimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmer.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View className="flex-1 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center" style={{ backgroundColor: '#1E40AF' }}>
      {/* Animated Ring */}
      <Animated.View style={[{ position: 'absolute' }, animatedRingStyle]}>
        <Svg width="300" height="300" viewBox="0 0 300 300">
          <Defs>
            <LinearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
              <Stop offset="50%" stopColor="#A78BFA" stopOpacity="0.3" />
              <Stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
            </LinearGradient>
          </Defs>
          <Circle
            cx="150"
            cy="150"
            r="140"
            stroke="url(#ringGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20 10"
          />
        </Svg>
      </Animated.View>

      {/* Main Logo */}
      <Animated.View style={[{ alignItems: 'center' }, animatedLogoStyle]}>
        <Svg width="150" height="150" viewBox="0 0 150 150">
          <Defs>
            <LinearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#60A5FA" />
              <Stop offset="50%" stopColor="#A78BFA" />
              <Stop offset="100%" stopColor="#F472B6" />
            </LinearGradient>
          </Defs>
          
          {/* Bitcoin Symbol with AI twist */}
          <Path
            d="M75 10 L75 140 M50 75 L100 75 M60 45 Q75 35 90 45 Q95 50 95 60 Q95 70 85 75 Q100 75 100 90 Q100 105 85 110 Q75 115 65 110"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* AI Circuit pattern */}
          <Circle cx="75" cy="75" r="45" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.5" />
          <Circle cx="75" cy="75" r="55" stroke="#A78BFA" strokeWidth="1" fill="none" opacity="0.3" />
          
          {/* Corner nodes */}
          <Circle cx="40" cy="40" r="5" fill="#60A5FA" />
          <Circle cx="110" cy="40" r="5" fill="#A78BFA" />
          <Circle cx="40" cy="110" r="5" fill="#F472B6" />
          <Circle cx="110" cy="110" r="5" fill="#60A5FA" />
        </Svg>

        {/* Shimmer overlay */}
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: 50,
              height: 200,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              transform: [{ skewX: '-20deg' }],
            },
            animatedShimmerStyle,
          ]}
        />
      </Animated.View>

      {/* App Name with animation */}
      <Animated.View style={[{ marginTop: 40, alignItems: 'center' }, animatedTextStyle]}>
        <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#FFFFFF', letterSpacing: 2 }}>
          IrwCrypto AI
        </Text>
        <View style={{ marginTop: 8, paddingHorizontal: 20, paddingVertical: 4, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20 }}>
          <Text style={{ fontSize: 14, color: '#E0E7FF', textAlign: 'center' }}>
            Advanced Mining Optimization
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: '#C7D2FE', marginTop: 24, textAlign: 'center' }}>
          by irwan
        </Text>
        <Text style={{ fontSize: 10, color: '#A5B4FC', marginTop: 4, textAlign: 'center' }}>
          irwan.bintangnetwork@gmail.com
        </Text>
      </Animated.View>

      {/* Loading indicator */}
      <Animated.View style={[{ position: 'absolute', bottom: 60 }, animatedTextStyle]}>
        <Text style={{ fontSize: 14, color: '#DBEAFE', opacity: 0.7 }}>
          Loading...
        </Text>
      </Animated.View>
    </View>
  );
}
