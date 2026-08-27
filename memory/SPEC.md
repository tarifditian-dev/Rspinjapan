# RSP in Japan — Living Spec

## Product
Responsive six-page Japanese-language education consultancy marketing site for RSP in Japan, founded in 2020 by Rohit Shiv Prasad in Kyoto. It guides students in India from Japanese learning through JLPT progression, Yokohama language school, and job-oriented support in Japan.

## Routes and flows
- `/` Home: brand hero, trust metrics, reasons to choose RSP, results teaser, inquiry CTA.
- `/about` About: company founding story, milestone timeline, mission, and values.
- `/founder` Founder: Rohit’s portrait, software engineering biography, Kyushu University education, research, patents, Japanese-language achievement, technical expertise, and verified LinkedIn profile.
- `/courses` Courses: N5–N1 cards, batch formats, JLPT preparation, included support, pathway.
- `/study-in-japan` Study in Japan: real Yokohama school building, academy group, classroom and cultural-visit photography; Yokohama overview; admission/visa stepper; living practicals; placement roles; and student-life gallery.
- `/success-stories` Success Stories + Contact: testimonials, validated inquiry form, and contact details.

## Data and integrations
This is a static marketing frontend. Contact submission is MOCKED / FRONTEND-ONLY for persistence: browser validation opens a prefilled WhatsApp click-to-chat draft for Rohit at `919557914389`; it does not persist to MongoDB or provide delivery confirmation.

## Visual system
Primary red is `#A80000` based on the supplied reference image, with wash cream `#F7F1E8`, ink `#241B18`, and warm gold `#E7C36D`. Rohit Shiv Prasad's supplied portrait is used on the Home and Founder pages, and supplied school/student images are used on Study in Japan. The contact map remains a labeled embed slot until final map details are supplied.