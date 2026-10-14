"use client";

import { useEffect, useState } from "react";

type Language = "en" | "te";
type Section = "home" | "learn" | "diagnosis" | "progress";

const content = {
  en: {
    home: "Home",
    learn: "Learn",
    diagnosis: "Diagnosis",
    progress: "My Progress",
    badge: "YOUR PERSONAL LEARNING COMPANION",
    title: "Discover your gaps. Learn with confidence.",
    subtitle:
      "Padho helps you understand concepts step by step, practise at your own pace, and discover which topics you need to improve.",
    start: "Start Learning",
    diagnose: "Find My Learning Gaps",
    lessons: "Explore Lessons",
    lessonsSub: "Build your understanding one concept at a time.",
    diagnosticTitle: "Learning Gap Detective",
    diagnosticSub:
      "Answer five questions to identify which fraction concepts you should practise.",
    progressTitle: "Your Learning Progress",
    progressSub: "Your learning journey, saved on this device.",
    welcome: "Welcome to Padho!",
    welcomeText:
      "Small steps every day can make difficult subjects easier.",
    featuresTitle: "Learning made simpler",
    feature1: "Learn step by step",
    feature1Text:
      "Understand concepts through simple explanations and examples.",
    feature2: "Discover learning gaps",
    feature2Text:
      "Find topics that need more practice using a short diagnostic quiz.",
    feature3: "Track your progress",
    feature3Text:
      "See your completed lessons and quiz results.",
    chooseLanguage: "Language",
    lesson: "Lesson",
    beginner: "Beginner",
    startLesson: "Open Lesson",
    back: "Back",
    next: "Next Question",
    submit: "Check My Answers",
    retake: "Try Again",
    question: "Question",
    of: "of",
    score: "Your Score",
    correct: "Correct",
    incorrect: "Incorrect",
    completed: "Lessons Completed",
    attempts: "Quiz Attempts",
    noProgress: "Your learning journey starts here.",
    noProgressText:
      "Complete a lesson or take the diagnostic quiz to see your progress.",
    takeQuiz: "Take Diagnostic Quiz",
    completedLabel: "Completed",
    markComplete: "Mark Lesson Complete",
    lessonComplete: "Lesson Completed!",
    explanation: "Explanation",
    footer:
      "Free learning for everyone. Learn at your own pace with Padho.",
    notice:
      "This is an educational practice tool. Your results identify topics to practise; they are not a formal assessment.",
  },
  te: {
    home: "హోమ్",
    learn: "నేర్చుకోండి",
    diagnosis: "పరీక్ష",
    progress: "నా ప్రగతి",
    badge: "మీ వ్యక్తిగత అభ్యాస సహాయకుడు",
    title: "మీ లోపాలను గుర్తించండి. నమ్మకంగా నేర్చుకోండి.",
    subtitle:
      "పఢో మీకు విషయాలను సులభంగా అర్థం చేసుకోవడానికి, సాధన చేయడానికి, మెరుగుపరచాల్సిన అంశాలను గుర్తించడానికి సహాయపడుతుంది.",
    start: "నేర్చుకోవడం ప్రారంభించండి",
    diagnose: "నా లోపాలను గుర్తించండి",
    lessons: "పాఠాలను చూడండి",
    lessonsSub: "ఒక్కో భావనను దశలవారీగా అర్థం చేసుకోండి.",
    diagnosticTitle: "అభ్యాస లోపాల గుర్తింపు",
    diagnosticSub:
      "భిన్నాలపై మీకు సాధన అవసరమైన అంశాలను గుర్తించడానికి ఐదు ప్రశ్నలకు సమాధానం ఇవ్వండి.",
    progressTitle: "మీ అభ్యాస ప్రగతి",
    progressSub: "ఈ పరికరంలో భద్రపరచబడిన మీ అభ్యాస వివరాలు.",
    welcome: "పఢోకు స్వాగతం!",
    welcomeText:
      "ప్రతిరోజూ కొంచెం సాధన చేస్తే కష్టమైన విషయాలు కూడా సులభమవుతాయి.",
    featuresTitle: "సులభమైన అభ్యాసం",
    feature1: "దశలవారీగా నేర్చుకోండి",
    feature1Text: "సులభమైన వివరణలు, ఉదాహరణలతో భావనలను అర్థం చేసుకోండి.",
    feature2: "అభ్యాస లోపాలను గుర్తించండి",
    feature2Text: "చిన్న పరీక్ష ద్వారా మరింత సాధన అవసరమైన అంశాలను తెలుసుకోండి.",
    feature3: "మీ ప్రగతిని తెలుసుకోండి",
    feature3Text: "పూర్తిచేసిన పాఠాలు, పరీక్ష ఫలితాలను చూడండి.",
    chooseLanguage: "భాష",
    lesson: "పాఠం",
    beginner: "ప్రారంభ స్థాయి",
    startLesson: "పాఠం తెరవండి",
    back: "వెనక్కి",
    next: "తదుపరి ప్రశ్న",
    submit: "సమాధానాలను పరిశీలించండి",
    retake: "మళ్లీ ప్రయత్నించండి",
    question: "ప్రశ్న",
    of: "లో",
    score: "మీ స్కోరు",
    correct: "సరైనవి",
    incorrect: "తప్పు",
    completed: "పూర్తిచేసిన పాఠాలు",
    attempts: "పరీక్ష ప్రయత్నాలు",
    noProgress: "మీ అభ్యాస ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది.",
    noProgressText:
      "మీ ప్రగతిని చూడటానికి ఒక పాఠాన్ని పూర్తిచేయండి లేదా పరీక్ష రాయండి.",
    takeQuiz: "పరీక్ష రాయండి",
    completedLabel: "పూర్తయింది",
    markComplete: "పాఠాన్ని పూర్తిచేయండి",
    lessonComplete: "పాఠం పూర్తయింది!",
    explanation: "వివరణ",
    footer: "అందరికీ ఉచిత విద్య. మీ వేగంతో నేర్చుకోండి.",
    notice:
      "ఇది విద్యా సాధన సాధనం. ఫలితాలు మరింత సాధన చేయాల్సిన అంశాలను సూచిస్తాయి; ఇవి అధికారిక పరీక్ష ఫలితాలు కావు.",
  },
};

const lessons = [
  {
    id: 1,
    title: "Understanding Fractions",
    telugu: "భిన్నాలను అర్థం చేసుకోవడం",
    description: "Learn numerators, denominators, and parts of a whole.",
    teluguDescription: "లవం, హారం మరియు మొత్తంలోని భాగాలను తెలుసుకోండి.",
    icon: "🍕",
    duration: "5 min",
    sections: [
      {
        heading: "What is a fraction?",
        teluguHeading: "భిన్నం అంటే ఏమిటి?",
        text: "A fraction represents a part of a whole. Imagine cutting a pizza into four equal slices. If you eat one slice, you eat 1/4 of the pizza.",
        teluguText:
          "భిన్నం అనేది ఒక మొత్తంలోని భాగాన్ని సూచిస్తుంది. ఒక పిజ్జాను నాలుగు సమాన ముక్కలుగా కత్తిరించండి. ఒక ముక్క తింటే, మీరు పిజ్జాలో 1/4 భాగం తిన్నట్లే.",
      },
      {
        heading: "Numerator and denominator",
        teluguHeading: "లవం మరియు హారం",
        text: "In 3/4, the numerator is 3. It tells us how many parts we have. The denominator is 4. It tells us how many equal parts make the whole.",
        teluguText:
          "3/4 లో లవం 3. మన దగ్గర ఎన్ని భాగాలు ఉన్నాయో ఇది చెబుతుంది. హారం 4. మొత్తం ఎన్ని సమాన భాగాలుగా విభజించబడిందో ఇది చెబుతుంది.",
      },
    ],
  },
  {
    id: 2,
    title: "Equivalent Fractions",
    telugu: "సమాన భిన్నాలు",
    description: "Understand fractions that represent the same value.",
    teluguDescription: "ఒకే విలువను సూచించే భిన్నాలను తెలుసుకోండి.",
    icon: "🟰",
    duration: "6 min",
    sections: [
      {
        heading: "What are equivalent fractions?",
        teluguHeading: "సమాన భిన్నాలు అంటే ఏమిటి?",
        text: "Equivalent fractions look different but represent the same value. For example, 1/2 and 2/4 are equivalent because both represent half.",
        teluguText:
          "సమాన భిన్నాలు చూడటానికి వేర్వేరుగా ఉన్నా ఒకే విలువను సూచిస్తాయి. ఉదాహరణకు, 1/2 మరియు 2/4 రెండూ సగం భాగాన్ని సూచిస్తాయి.",
      },
      {
        heading: "How do we find them?",
        teluguHeading: "వాటిని ఎలా కనుగొనాలి?",
        text: "Multiply or divide both the numerator and denominator by the same non-zero number. For example, 1/2 × 2/2 = 2/4.",
        teluguText:
          "లవం, హారం రెండింటినీ ఒకే సున్నా కాని సంఖ్యతో గుణించండి లేదా భాగించండి. ఉదాహరణకు, 1/2 × 2/2 = 2/4.",
      },
    ],
  },
  {
    id: 3,
    title: "Comparing Fractions",
    telugu: "భిన్నాలను పోల్చడం",
    description: "Learn to compare fractions using simple rules.",
    teluguDescription: "సులభమైన నియమాలతో భిన్నాలను పోల్చడం నేర్చుకోండి.",
    icon: "⚖️",
    duration: "7 min",
    sections: [
      {
        heading: "Same denominator",
        teluguHeading: "ఒకే హారం",
        text: "When denominators are equal, compare the numerators. For example, 3/5 is greater than 2/5 because 3 is greater than 2.",
        teluguText:
          "హారాలు సమానంగా ఉన్నప్పుడు లవాలను పోల్చండి. ఉదాహరణకు, 3/5 అనేది 2/5 కంటే పెద్దది, ఎందుకంటే 3 అనేది 2 కంటే పెద్దది.",
      },
      {
        heading: "Same numerator",
        teluguHeading: "ఒకే లవం",
        text: "For positive fractions with the same numerator, the fraction with the smaller denominator is greater. For example, 1/2 is greater than 1/4.",
        teluguText:
          "ధన భిన్నాలలో లవం ఒకటే ఉన్నప్పుడు చిన్న హారం ఉన్న భిన్నం పెద్దది. ఉదాహరణకు, 1/2 అనేది 1/4 కంటే పెద్దది.",
      },
    ],
  },
  {
    id: 4,
    title: "Adding Fractions",
    telugu: "భిన్నాల కూడిక",
    description: "Practise adding fractions with the same denominator.",
    teluguDescription: "ఒకే హారం ఉన్న భిన్నాలను కూడడం సాధన చేయండి.",
    icon: "➕",
    duration: "8 min",
    sections: [
      {
        heading: "Adding fractions",
        teluguHeading: "భిన్నాలను కూడడం",
        text: "When denominators are the same, add the numerators and keep the denominator unchanged. For example, 1/5 + 2/5 = 3/5.",
        teluguText:
          "హారాలు ఒకటే ఉన్నప్పుడు లవాలను కూడి, హారాన్ని అలాగే ఉంచండి. ఉదాహరణకు, 1/5 + 2/5 = 3/5.",
      },
      {
        heading: "Remember",
        teluguHeading: "గుర్తుంచుకోండి",
        text: "Do not add the denominators when they are already equal. For example, 1/5 + 2/5 equals 3/5, not 3/10.",
        teluguText:
          "హారాలు ఒకటే ఉన్నప్పుడు వాటిని కూడకండి. ఉదాహరణకు, 1/5 + 2/5 అనేది 3/5, 3/10 కాదు.",
      },
    ],
  },
];

const questions = [
  {
    topic: "Understanding Fractions",
    question: "In the fraction 3/5, what is the numerator?",
    teluguQuestion: "3/5 భిన్నంలో లవం ఏది?",
    options: ["3", "5", "8", "2"],
    correct: 0,
    explanation: "The numerator is the top number, so it is 3.",
    teluguExplanation: "లవం పైన ఉండే సంఖ్య. కాబట్టి సమాధానం 3.",
  },
  {
    topic: "Equivalent Fractions",
    question: "Which fraction is equivalent to 1/2?",
    teluguQuestion: "1/2 కు సమానమైన భిన్నం ఏది?",
    options: ["1/3", "2/4", "3/5", "2/3"],
    correct: 1,
    explanation: "2/4 equals 1/2 because both numerator and denominator are multiplied by 2.",
    teluguExplanation:
      "లవం, హారం రెండింటినీ 2తో గుణించడం వల్ల 2/4 అనేది 1/2 కు సమానం.",
  },
  {
    topic: "Comparing Fractions",
    question: "Which fraction is greater?",
    teluguQuestion: "ఏ భిన్నం పెద్దది?",
    options: ["1/4", "1/2", "They are equal", "Cannot determine"],
    correct: 1,
    explanation: "One half is greater than one quarter.",
    teluguExplanation: "సగం భాగం పావు భాగం కంటే పెద్దది.",
  },
  {
    topic: "Adding Fractions",
    question: "What is 1/5 + 2/5?",
    teluguQuestion: "1/5 + 2/5 విలువ ఎంత?",
    options: ["3/10", "2/5", "3/5", "1/5"],
    correct: 2,
    explanation: "Add the numerators: 1 + 2 = 3. Keep the denominator 5.",
    teluguExplanation:
      "లవాలను కూడండి: 1 + 2 = 3. హారం 5 అలాగే ఉంటుంది.",
  },
  {
    topic: "Understanding Fractions",
    question: "If a pizza has 4 equal slices and you eat 1, what fraction did you eat?",
    teluguQuestion:
      "ఒక పిజ్జాలో 4 సమాన ముక్కలు ఉన్నాయి. మీరు 1 ముక్క తింటే ఎంత భాగం తిన్నారు?",
    options: ["1/2", "1/3", "4/1", "1/4"],
    correct: 3,
    explanation: "You ate 1 out of 4 equal slices, so you ate 1/4.",
    teluguExplanation:
      "4 సమాన ముక్కల్లో 1 ముక్క తిన్నారు. కాబట్టి మీరు 1/4 భాగం తిన్నారు.",
  },
];

type SavedProgress = {
  completedLessons: number[];
  attempts: number;
  lastScore: number | null;
};

const defaultProgress: SavedProgress = {
  completedLessons: [],
  attempts: 0,
  lastScore: null,
};

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [section, setSection] = useState<Section>("home");
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState<SavedProgress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  const t = content[language];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("padho-ai-progress");
      if (saved) {
        const parsed = JSON.parse(saved) as SavedProgress;
        setProgress({
          completedLessons: Array.isArray(parsed.completedLessons)
            ? parsed.completedLessons
            : [],
          attempts: Number(parsed.attempts) || 0,
          lastScore:
            typeof parsed.lastScore === "number" ? parsed.lastScore : null,
        });
      }
    } catch {
      // Continue with empty progress if saved browser data is invalid.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("padho-ai-progress", JSON.stringify(progress));
    } catch {
      // The page remains usable if browser storage is unavailable.
    }
  }, [progress, loaded]);

  const navigate = (destination: Section) => {
    setSection(destination);
    setActiveLesson(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLesson = (id: number) => {
    setActiveLesson(id);
    setSection("learn");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const completeLesson = (id: number) => {
    setProgress((previous) => ({
      ...previous,
      completedLessons: previous.completedLessons.includes(id)
        ? previous.completedLessons
        : [...previous.completedLessons, id],
    }));
  };

  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.correct ? 1 : 0),
    0,
  );

  const submitQuiz = () => {
    if (Object.keys(answers).length !== questions.length) return;

    setSubmitted(true);
    setProgress((previous) => ({
      ...previous,
      attempts: previous.attempts + 1,
      lastScore: score,
    }));
  };

  const startQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    navigate("diagnosis");
  };

  const currentLesson = lessons.find((lesson) => lesson.id === activeLesson);

  const topicScores = questions.reduce<Record<string, { right: number; total: number }>>(
    (result, question, index) => {
      if (!result[question.topic]) {
        result[question.topic] = { right: 0, total: 0 };
      }
      result[question.topic].total += 1;

      if (answers[index] === question.correct) {
        result[question.topic].right += 1;
      }

      return result;
    },
    {},
  );

  const weakTopics = Object.entries(topicScores)
    .filter(([, value]) => value.right < value.total)
    .map(([topic]) => topic);

  return (
    <main>
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            navigate("home");
          }}
          aria-label="Padho home"
        >
          <span className="logo-icon">प</span>
          <span>Padho<span style={{ color: "#172033" }}> AI</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }}>
            {t.home}
          </a>
          <a href="#learn" onClick={(e) => { e.preventDefault(); navigate("learn"); }}>
            {t.learn}
          </a>
          <a href="#diagnosis" onClick={(e) => { e.preventDefault(); startQuiz(); }}>
            {t.diagnosis}
          </a>
          <a href="#progress" onClick={(e) => { e.preventDefault(); navigate("progress"); }}>
            {t.progress}
          </a>
        </nav>

        <div className="nav-actions">
          <div className="language-toggle" aria-label={t.chooseLanguage}>
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={language === "te" ? "active" : ""}
              onClick={() => setLanguage("te")}
              type="button"
            >
              తె
            </button>
          </div>
        </div>
      </header>

      {section === "home" && (
        <>
          <section className="hero" id="home">
            <div className="container hero-grid">
              <div>
                <span className="eyebrow">{t.badge}</span>
                <h1>{t.title}</h1>
                <p>{t.subtitle}</p>
                <div className="hero-buttons">
                  <button className="btn btn-light" onClick={() => navigate("learn")}>
                    {t.start} →
                  </button>
                  <button className="btn btn-outline" onClick={startQuiz}>
                    {t.diagnose}
                  </button>
                </div>
              </div>

              <div className="hero-card">
                <h3>{t.welcome}</h3>
                <p>{t.welcomeText}</p>
                <div className="hero-card-row">
                  <span className="hero-card-icon">📚</span>
                  <div style={{ flex: 1 }}>
                    <strong>{t.lessons}</strong>
                    <small>4 beginner-friendly lessons</small>
                  </div>
                  <span>→</span>
                </div>
                <div className="hero-card-row">
                  <span className="hero-card-icon">🎯</span>
                  <div style={{ flex: 1 }}>
                    <strong>{t.diagnosis}</strong>
                    <small>5 practice questions</small>
                  </div>
                  <span>→</span>
                </div>
                <div className="hero-card-row">
                  <span className="hero-card-icon">📈</span>
                  <div style={{ flex: 1 }}>
                    <strong>{t.progress}</strong>
                    <small>{progress.completedLessons.length} lessons completed</small>
                  </div>
                  <span>→</span>
                </div>
              </div>
            </div>
          </section>

          <div className="container stats-grid">
            <div className="stat-card">
              <strong>4</strong>
              <span>Interactive lessons</span>
            </div>
            <div className="stat-card">
              <strong>5</strong>
              <span>Diagnostic questions</span>
            </div>
            <div className="stat-card">
              <strong>{progress.completedLessons.length}/4</strong>
              <span>{t.completed}</span>
            </div>
            <div className="stat-card">
              <strong>{progress.lastScore === null ? "—" : `${progress.lastScore}/5`}</strong>
              <span>{t.score}</span>
            </div>
          </div>

          <section className="section">
            <div className="container">
              <div className="section-heading">
                <h2>{t.featuresTitle}</h2>
                <p>Simple tools to help you learn, practise, and improve.</p>
              </div>
              <div className="grid grid-3">
                <article className="card">
                  <div className="card-icon">📖</div>
                  <h3>{t.feature1}</h3>
                  <p>{t.feature1Text}</p>
                </article>
                <article className="card">
                  <div className="card-icon">🔎</div>
                  <h3>{t.feature2}</h3>
                  <p>{t.feature2Text}</p>
                </article>
                <article className="card">
                  <div className="card-icon">📊</div>
                  <h3>{t.feature3}</h3>
                  <p>{t.feature3Text}</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" style={{ background: "#fff" }}>
            <div className="container">
              <div className="section-heading">
                <h2>{t.lessons}</h2>
                <p>{t.lessonsSub}</p>
              </div>
              <LessonGrid
                language={language}
                completed={progress.completedLessons}
                onOpen={openLesson}
                buttonLabel={t.startLesson}
              />
              <div className="text-center mt-20">
                <button className="btn btn-primary" onClick={() => navigate("learn")}>
                  {t.lessons} →
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {section === "learn" && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>{t.lessons}</h2>
              <p>{t.lessonsSub}</p>
            </div>

            {currentLesson ? (
              <div className="content-box">
                <button
                  className="btn btn-outline mb-20"
                  onClick={() => setActiveLesson(null)}
                >
                  ← {t.back}
                </button>
                <span className="tag">{t.lesson} {currentLesson.id}</span>
                <h2>{language === "te" ? currentLesson.telugu : currentLesson.title}</h2>
                <p className="text-muted">
                  {language === "te"
                    ? currentLesson.teluguDescription
                    : currentLesson.description}
                </p>

                {currentLesson.sections.map((item, index) => (
                  <article className="lesson-example" key={index}>
                    <h3>{language === "te" ? item.teluguHeading : item.heading}</h3>
                    <p>{language === "te" ? item.teluguText : item.text}</p>
                  </article>
                ))}

                <div className="notice">
                  <strong>💡 Practice tip:</strong> Try explaining the concept in your own words before moving to the next lesson.
                </div>

                {progress.completedLessons.includes(currentLesson.id) ? (
                  <p className="tag tag-success">✓ {t.lessonComplete}</p>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => completeLesson(currentLesson.id)}
                  >
                    {t.markComplete}
                  </button>
                )}

                <button
                  className="btn btn-outline"
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    const nextLesson = lessons.find((item) => item.id === currentLesson.id + 1);
                    if (nextLesson) {
                      openLesson(nextLesson.id);
                    } else {
                      setActiveLesson(null);
                    }
                  }}
                >
                  {t.next} →
                </button>
              </div>
            ) : (
              <LessonGrid
                language={language}
                completed={progress.completedLessons}
                onOpen={openLesson}
                buttonLabel={t.startLesson}
              />
            )}

            <div className="notice mt-20">
              <strong>{t.notice}</strong>
            </div>
          </div>
        </section>
      )}

      {section === "diagnosis" && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>{t.diagnosticTitle}</h2>
              <p>{t.diagnosticSub}</p>
            </div>

            <div className="content-box">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <strong>{Object.keys(answers).length} / {questions.length} answered</strong>
                <span className="text-muted">Fractions · Beginner</span>
              </div>
              <div className="progress-track mt-20 mb-20">
                <div
                  className="progress-fill"
                  style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                />
              </div>

              {questions.map((question, index) => (
                <div className="quiz-question" key={index}>
                  <span className="tag">{question.topic}</span>
                  <h3>
                    {t.question} {index + 1}:{" "}
                    {language === "te" ? question.teluguQuestion : question.question}
                  </h3>

                  {question.options.map((option, optionIndex) => {
                    let className = "answer-option";
                    if (answers[index] === optionIndex) className += " selected";
                    if (submitted && optionIndex === question.correct) className += " correct";
                    if (
                      submitted &&
                      answers[index] === optionIndex &&
                      optionIndex !== question.correct
                    ) {
                      className += " incorrect";
                    }

                    return (
                      <button
                        className={className}
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setAnswers((previous) => ({ ...previous, [index]: optionIndex }))
                        }
                      >
                        <span style={{ marginRight: 10 }}>
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}

                  {submitted && (
                    <div className="feedback">
                      <strong>{t.explanation}:</strong>{" "}
                      {language === "te"
                        ? question.teluguExplanation
                        : question.explanation}
                    </div>
                  )}
                </div>
              ))}

              {!submitted ? (
                <button
                  className="btn btn-primary"
                  disabled={Object.keys(answers).length !== questions.length}
                  onClick={submitQuiz}
                >
                  {t.submit}
                </button>
              ) : (
                <div className="result-card">
                  <h3>{t.score}: {score} / {questions.length}</h3>
                  <p>
                    {score === 5
                      ? "Excellent! You answered every question correctly."
                      : score >= 3
                        ? "Good effort! Review the explanations and practise the topics you missed."
                        : "Keep practising! Start with the lessons below and try the quiz again."}
                  </p>
                  <p><strong>Topics to practise:</strong></p>
                  {weakTopics.length > 0 ? (
                    <ul>
                      {weakTopics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                  ) : (
                    <p>You answered every topic correctly. Great work!</p>
                  )}
                  <button className="btn btn-primary" onClick={() => navigate("learn")}>
                    {t.lessons}
                  </button>
                  <button
                    className="btn btn-outline"
                    style={{ marginLeft: 10 }}
                    onClick={startQuiz}
                  >
                    {t.retake}
                  </button>
                </div>
              )}

              <div className="notice mt-20">{t.notice}</div>
            </div>
          </div>
        </section>
      )}

      {section === "progress" && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>{t.progressTitle}</h2>
              <p>{t.progressSub}</p>
            </div>

            <div className="grid grid-3">
              <div className="stat-card">
                <strong>{progress.completedLessons.length}/4</strong>
                <span>{t.completed}</span>
              </div>
              <div className="stat-card">
                <strong>{progress.attempts}</strong>
                <span>{t.attempts}</span>
              </div>
              <div className="stat-card">
                <strong>{progress.lastScore === null ? "—" : `${progress.lastScore}/5`}</strong>
                <span>{t.score}</span>
              </div>
            </div>

            <div className="content-box mt-20">
              <h3>Lesson completion</h3>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${(progress.completedLessons.length / lessons.length) * 100}%` }}
                />
              </div>
              <p className="text-muted">
                {progress.completedLessons.length} of {lessons.length} lessons completed
              </p>

              {lessons.map((lesson) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                return (
                  <div
                    key={lesson.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "15px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span>
                      {lesson.icon}{" "}
                      {language === "te" ? lesson.telugu : lesson.title}
                    </span>
                    <span className={`tag ${isCompleted ? "tag-success" : ""}`}>
                      {isCompleted ? `✓ ${t.completedLabel}` : "Not started"}
                    </span>
                  </div>
                );
              })}

              {progress.lastScore === null && (
                <div className="empty-state mt-20">
                  <h3>{t.noProgress}</h3>
                  <p>{t.noProgressText}</p>
                  <button className="btn btn-primary" onClick={startQuiz}>
                    {t.takeQuiz}
                  </button>
                </div>
              )}

              <div className="mt-20">
                <button className="btn btn-primary" onClick={() => navigate("learn")}>
                  {t.lessons}
                </button>
                <button
                  className="btn btn-outline"
                  style={{ marginLeft: 10 }}
                  onClick={startQuiz}
                >
                  {t.diagnosis}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="logo" style={{ justifyContent: "center" }}>
          <span className="logo-icon">प</span>
          <span>Padho<span style={{ color: "#172033" }}> AI</span></span>
        </div>
        <p>{t.footer}</p>
        <p>© {new Date().getFullYear()} Padho AI · Learn. Practise. Grow.</p>
      </footer>
    </main>
  );
}

function LessonGrid({
  language,
  completed,
  onOpen,
  buttonLabel,
}: {
  language: Language;
  completed: number[];
  onOpen: (id: number) => void;
  buttonLabel: string;
}) {
  return (
    <div className="grid grid-2">
      {lessons.map((lesson) => {
        const isCompleted = completed.includes(lesson.id);

        return (
          <article className="card lesson-card" key={lesson.id}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div className="card-icon">{lesson.icon}</div>
              {isCompleted && <span className="tag tag-success">✓ Completed</span>}
            </div>
            <span className="tag">
              Lesson {lesson.id} · {lesson.duration}
            </span>
            <h3>{language === "te" ? lesson.telugu : lesson.title}</h3>
            <p>
              {language === "te" ? lesson.teluguDescription : lesson.description}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onOpen(lesson.id)}
            >
              {buttonLabel} →
            </button>
          </article>
        );
      })}
    </div>
  );
}
