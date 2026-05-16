"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Building, Globe, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Hotels",
          id: "catalog",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="StayBooker"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Your Next Escape, Perfectly Booked."
      description="Discover hand-picked resorts, cozy homestays, and city luxury at prices you'll love. Effortless searching, secure payments, and 24/7 support."
      testimonials={[
        {
          name: "Alice M.",
          handle: "@travelguru",
          testimonial: "The best booking experience I've had. So easy to find the right stay!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-woman-smiling-close-up_23-2148369441.jpg?_wi=1",
        },
        {
          name: "Bob R.",
          handle: "@biztrips",
          testimonial: "Professional, reliable, and perfectly curated. Highly recommend for business trips.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-businessman-formal-outfit-with-sunglasses-talking-phone_181624-33457.jpg?_wi=1",
        },
        {
          name: "Cathy P.",
          handle: "@vacaymode",
          testimonial: "Found my favorite boutique hotel in seconds. The UI is just beautiful.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mixed-race-lovely-couple-with-glad-expressions-take-selfie-smartphone-camera-spend-vacation-together-dressed-casually-use-binoculars_273609-33400.jpg?_wi=1",
        },
        {
          name: "David W.",
          handle: "@budgettravel",
          testimonial: "Great price filters and transparent pricing. No hidden fees!",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-holding-skateboard-walking-outside_23-2147654979.jpg?_wi=1",
        },
        {
          name: "Elena K.",
          handle: "@globetrotter",
          testimonial: "Absolutely seamless booking process from start to finish.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-backpack_23-2148518190.jpg?_wi=1",
        },
      ]}
      buttons={[
        {
          text: "Start Booking",
          href: "#catalog",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wooden-bridge-pier-against-beautiful-sky_146671-18871.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/crazy-man-funny-expression_1194-3133.jpg",
          alt: "Traveler 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-handsome-man-taking-selfie-videocalling-with-digital-tablet_176420-19041.jpg",
          alt: "Traveler 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crazy-sports-man-funny-expression_1194-3317.jpg",
          alt: "Traveler 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-blue-clothes-smiling_23-2148055977.jpg",
          alt: "Traveler 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-man-sitting-his-luggage_23-2148357305.jpg",
          alt: "Traveler 5",
        },
      ]}
      avatarText="Join 2M+ happy travelers"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Why Book With StayBooker"
      description="We simplify your travel plans with smart technology and thousands of verified properties worldwide."
      accordionItems={[
        {
          id: "1",
          title: "Smart City Search",
          content: "Our powerful engine lets you filter by city, neighborhood, and local attractions to find exactly where you want to be.",
        },
        {
          id: "2",
          title: "Secure Online Payments",
          content: "Book with confidence knowing your data is protected with enterprise-grade encryption and global payment security.",
        },
        {
          id: "3",
          title: "Real User Reviews",
          content: "Read authentic ratings and detailed feedback from thousands of travelers to ensure your stay matches your expectations.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pin-navigation-map-location-icon-sign-symbol-button-blue-speech-bubble-white-background-3d-rendering_56104-1188.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Oceanic Resort",
          price: "$299/night",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-booking-reservation-travel-reception-concept_53876-124416.jpg",
        },
        {
          id: "2",
          name: "Skyline Suite",
          price: "$450/night",
          imageSrc: "http://img.b2bpic.net/free-photo/office-skyscraper-view-night-downtown_1127-2800.jpg",
        },
        {
          id: "3",
          name: "Alpine Cabin",
          price: "$199/night",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-wooden-house-near-green-trees-mountain-daytime_414077-32.jpg",
        },
        {
          id: "4",
          name: "Med Villa",
          price: "$320/night",
          imageSrc: "http://img.b2bpic.net/free-photo/infinity-caribbean-resort-vacation-tree_1203-5297.jpg",
        },
        {
          id: "5",
          name: "Royal Grand",
          price: "$600/night",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-national-art-museum-bucharest-romania-golden-details-marble-painting_1268-19833.jpg",
        },
        {
          id: "6",
          name: "Boutique Loft",
          price: "$240/night",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-modern-spiral-staircase-lights_181624-26451.jpg",
        },
      ]}
      title="Featured Stays"
      description="Explore our curated collection of luxury resorts and hidden gems."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          tag: "Free",
          price: "$0",
          period: "/mo",
          description: "Access to standard search and booking features.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Included Features",
          features: [
            "Advanced search",
            "Standard support",
            "Verified reviews",
          ],
        },
        {
          id: "pro",
          tag: "Popular",
          price: "$19",
          period: "/mo",
          description: "Unleash exclusive deals and premium travel perks.",
          button: {
            text: "Upgrade",
          },
          featuresTitle: "Everything in Basic, Plus",
          features: [
            "10% off member rates",
            "Free cancellation",
            "Priority booking",
            "24/7 concierge",
          ],
        },
        {
          id: "enterprise",
          tag: "Elite",
          price: "$49",
          period: "/mo",
          description: "The ultimate experience for frequent flyers and luxury travelers.",
          button: {
            text: "Contact Us",
          },
          featuresTitle: "Everything in Pro, Plus",
          features: [
            "Unlimited lounge access",
            "VIP room upgrades",
            "Free airport transfers",
            "Dedicated account manager",
          ],
        },
      ]}
      title="Flexible Membership Plans"
      description="Unlock exclusive rates and benefits when you join our travel rewards program."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="inline-image"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Building,
          title: "Verified Hotels",
          value: "15,000+",
        },
        {
          id: "m2",
          icon: Users,
          title: "Happy Travelers",
          value: "2M+",
        },
        {
          id: "m3",
          icon: Globe,
          title: "Destinations",
          value: "120+",
        },
      ]}
      title="Trusted by Millions"
      description="Real numbers behind your dream vacations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-woman-smiling-close-up_23-2148369441.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Michael B.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-businessman-formal-outfit-with-sunglasses-talking-phone_181624-33457.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Elena K.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mixed-race-lovely-couple-with-glad-expressions-take-selfie-smartphone-camera-spend-vacation-together-dressed-casually-use-binoculars_273609-33400.jpg?_wi=2",
        },
        {
          id: "4",
          name: "James L.",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-holding-skateboard-walking-outside_23-2147654979.jpg?_wi=2",
        },
        {
          id: "5",
          name: "Sofia R.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-backpack_23-2148518190.jpg?_wi=2",
        },
      ]}
      cardTitle="Traveler Voices"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Can I cancel my booking?",
          content: "Yes, most bookings offer free cancellation up to 48 hours before arrival. Check specific property terms.",
        },
        {
          id: "f2",
          title: "Is my payment secure?",
          content: "Absolutely. We use industry-standard encryption to protect all your transaction data.",
        },
        {
          id: "f3",
          title: "How do I contact customer support?",
          content: "You can reach us 24/7 via the help section or by calling our support number provided in your booking confirmation.",
        },
        {
          id: "f4",
          title: "Are there hidden fees?",
          content: "We believe in transparency. All prices include taxes and fees shown clearly during the checkout process.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common queries about your booking, payment, and travel security."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Newsletter"
      title="Start Your Journey Today"
      description="Sign up for our newsletter to receive curated travel deals and early access to discounts."
      imageSrc="http://img.b2bpic.net/free-photo/world-photography-day-celebration_23-2151644838.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="StayBooker"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
