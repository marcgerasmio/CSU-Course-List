
const coursesDatabase = [
  {
    college: 'CHASS',
    name: 'BACHELOR OF ARTS IN SOCIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['society', 'social', 'community', 'culture', 'behavior', 'research', 'people', 'groups', 'human', 'development', 'issues', 'welfare'],
    description: 'The Bachelor of Arts in Sociology program exemplifies academic excellence grounded in theory and practice. It provides a strong foundation in sociological analysis, enabling students to understand and address complex social realities in Caraga and the broader Philippines. The program offers a rich learning experience that combines classroom instruction, field research, and community engagement, fostering critical thinking, effective communication, and social responsibility. Graduates pursue meaningful careers in community development, social research, policy analysis, education, and organizational management. The CSU Department of Sociology collaborates with government agencies and development organizations to produce evidence-based studies and policy recommendations that contribute to social development in the Caraga Region and beyond.'
  },
  {
    college: 'CED',
    name: 'BACHELOR OF ELEMENTARY EDUCATION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'children', 'education', 'learning', 'elementary', 'classroom', 'students', 'pedagogy', 'curriculum', 'instruction', 'kids', 'school'],
    description: 'The Bachelor of Elementary Education program is designed to prepare its students to become competent, upright, and service-oriented elementary school teachers. This program is Level IV Re-Accredited by AACCUP, a mark of excellence in instruction, research, and community engagement. Students enjoy a dynamic learning experience enriched by expert faculty, hands-on teaching practice, and a supportive academic environment. Graduates of the program are highly sought-after, with career opportunities in both public and private schools, local and international educational institutions, and community-based learning programs. The program proudly celebrates six LEPT topnotchers, a Top 9 national ranking in the recent Licensure Exam for Professional Teachers, and the prestigious EQUATE Award from CHED, a testament to its commitment to quality and innovation in teacher education.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN ACCOUNTANCY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['accounting', 'finance', 'business', 'auditing', 'taxation', 'financial', 'bookkeeping', 'CPA', 'money', 'numbers', 'budget', 'reports'],
    description: 'The Bachelor of Science in Accountancy equips students with the technical competence, professional skills, and ethical values necessary to become globally competitive professional accountants. It provides a strong foundation in accounting, finance, business, and information technology to prepare graduates for certification exams and professional practice. '
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURAL AND BIOSYSTEMS ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['agriculture', 'engineering', 'farming', 'machinery', 'irrigation', 'technology', 'systems', 'design', 'rural', 'food', 'production', 'automation'],
    description: 'Bachelor of Science in Agricultural and Biosystems Engineering blends engineering fundamentals with agricultural science to create technologies that improve productivity, sustainability, and livelihoods in rural communities. Students get hands-on experience in farm machinery design, post-harvest systems, and energy recovery through lab work, field projects, and community extension – ideal for learners who like applied, impact-driven work. Graduates are sought after by agribusiness firms, equipment manufacturers, government agencies (agriculture and rural development), and NGOs focused on sustainable farming and food systems. Recent program strengths include active researcher engagement in regional mechanization and energy recovery projects and collaborations that connect students to real community problems.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['farming', 'agriculture', 'crops', 'livestock', 'rural', 'food', 'production', 'agribusiness', 'plants', 'soil', 'harvest', 'sustainable'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRIBUSINESS MANAGEMENT',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['agribusiness', 'business', 'agriculture', 'management', 'farming', 'entrepreneurship', 'marketing', 'economics', 'rural', 'finance', 'trade', 'supply'],
    description:'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRICULTURAL ECONOMICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['economics', 'agriculture', 'business', 'finance', 'market', 'trade', 'farming', 'rural', 'policy', 'development', 'production', 'analysis'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRONOMY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['crops', 'plants', 'farming', 'agriculture', 'soil', 'cultivation', 'seeds', 'harvest', 'production', 'field', 'growth', 'yield'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN ANIMAL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['animals', 'livestock', 'farming', 'veterinary', 'cattle', 'poultry', 'breeding', 'nutrition', 'husbandry', 'meat', 'dairy', 'genetics'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN CROP PROTECTION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['crops', 'pests', 'diseases', 'protection', 'agriculture', 'pesticides', 'farming', 'plants', 'prevention', 'control', 'harvest', 'safety'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN HORTICULTURE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['plants', 'gardens', 'horticulture', 'vegetables', 'fruits', 'flowers', 'landscaping', 'cultivation', 'nursery', 'greenhouse', 'ornamental', 'growing'],
    description:'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'CAA',
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN SOIL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['soil', 'agriculture', 'earth', 'fertility', 'nutrients', 'farming', 'crops', 'geology', 'analysis', 'chemistry', 'conservation', 'land'],
    description: 'The Bachelor of Science in Agriculture program cultivates future leaders in sustainable agriculture. It offers six major specializations: Agronomy, Agricultural Economics, Animal Science, Crop Protection, Horticulture, and Soil Science. The program combines scientific knowledge with ethical, entrepreneurial, and innovative approaches to modern farming. Students gain hands-on experience in production, processing, and agribusiness management while learning to address real-world agricultural challenges through sustainable and technology-driven solutions. Guided by national competency standards, the program produces globally competitive and socially responsible professionals dedicated to advancing food security, environmental stewardship, and rural development for a more sustainable future.'
  },
  {
    college: 'COFES',
    name: 'BACHELOR OF SCIENCE IN AGROFORESTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['trees', 'forestry', 'agriculture', 'farming', 'environment', 'sustainable', 'plants', 'conservation', 'ecosystem', 'land', 'agroforest', 'crops'],
    description: 'The Bachelor of Science in Agroforestry program is multidisciplinary, training professionals to integrate trees, crops, and livestock into sustainable land-use systems. It builds a strong foundation in ecological, social, and economic principles that support environmental stability, food security, and rural development. Emphasizing hands-on training, research, and community-based resource management, the program develops skills in farm planning, and soil and water conservation. Graduates become competent researchers, extension workers, entrepreneurs, and managers who promote sustainable livelihoods and resource conservation. The BS Agroforestry program nurtures ethical and innovative individuals dedicated to advancing agroforestry practices and contributing to national development through sustainable and inclusive approaches to land and resource management.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN APPLIED MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mathematics', 'math', 'numbers', 'calculus', 'statistics', 'modeling', 'analysis', 'computation', 'problem-solving', 'logic', 'equations', 'data'],
    description: 'The Bachelor of Science in Applied Mathematics (BSAM) offers a dynamic and interdisciplinary curriculum that empowers students to tackle complex, real-world challenges using advanced mathematical and computational tools. With specialized tracks in Mathematical Modeling, Applied Statistics, and Banking and Finance, the program provides tailored learning experiences that align with diverse industry needs. Students engage in hands-on projects, data-driven research, and simulations that prepare them for careers in finance, analytics, research, and policy development. The program’s recent achievement of AACCUP Level IV Accreditation underscores its commitment to academic excellence, quality assurance, and continuous improvement. Graduates emerge as versatile problem-solvers equipped for impactful roles in both public and private sectors.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['biology', 'life', 'organisms', 'science', 'cells', 'genetics', 'ecology', 'laboratory', 'research', 'nature', 'living', 'health'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN BIODIVERSITY CONSERVATION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['biodiversity', 'conservation', 'environment', 'species', 'ecology', 'wildlife', 'nature', 'protection', 'endangered', 'habitat', 'ecosystem', 'sustainability'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN ENTOMOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['insects', 'bugs', 'entomology', 'biology', 'pests', 'ecology', 'species', 'research', 'larvae', 'beetles', 'butterflies', 'study'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN MEDICAL BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['medical', 'biology', 'health', 'disease', 'laboratory', 'research', 'clinical', 'medicine', 'cells', 'diagnosis', 'human', 'healthcare'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'
  
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN MICROBIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['microorganisms', 'bacteria', 'virus', 'biology', 'laboratory', 'microbes', 'germs', 'research', 'cells', 'pathogens', 'microbiology', 'health'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'

  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN PLANT BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['plants', 'botany', 'biology', 'photosynthesis', 'agriculture', 'ecology', 'growth', 'species', 'research', 'nature', 'vegetation', 'cells'],
    description: 'The Bachelor of Science in Biology offers a comprehensive and dynamic education that caters to the growing demand for Biology students and professionals in the Caraga Region and beyond. The program provides students with extensive hands-on learning experiences in both field and laboratory settings, nurturing scientific inquiry, research competence, and a strong appreciation for the life sciences. It offers four major tracks: Biodiversity and Conservation, Medical Biology, Microbiology, and Plant Biology, allowing students to specialize according to their interests and career aspirations. Graduates pursue diverse career paths in research, education, healthcare, biotechnology, environmental management, and conservation. Students actively engage in research projects, field surveys, and professional training that prepare them for global competitiveness. The program has also recently celebrated the success of its Registered Microbiologist (RMicro) passers, highlighting the excellence and distinction of CSU’s Biology education.'

  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['finance', 'business', 'management', 'investment', 'money', 'accounting', 'banking', 'economics', 'budget', 'financial', 'assets', 'analysis'],
    description: 'The Bachelor of Science in Business Administration major in Financial Management equips students with the knowledge and technical skills essential for careers in corporate finance, banking, investment, and other financial sectors. It emphasizes the study of financial institutions, analytical tools, and decision-making methodologies grounded in sound financial theories. The curriculum also fosters ethical responsibility, market integrity, good governance, and a globally competitive mindset vital for effective financial management and leadership.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN HUMAN RESOURCE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['human resources', 'HR', 'people', 'management', 'recruitment', 'employees', 'business', 'training', 'workforce', 'personnel', 'hiring', 'development'],
    description: 'The Bachelor of Science in Business Administration major in Human Resource Management prepares students for careers in managing an organization’s human capital. It focuses on developing competencies in recruitment, staffing, training, employee relations, and career development. The program equips graduates with the skills and ethical grounding needed to effectively manage people and foster organizational growth and productivity.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['marketing', 'business', 'advertising', 'sales', 'branding', 'promotion', 'strategy', 'consumer', 'management', 'digital', 'market', 'campaigns'],
    description: 'The Bachelor of Science in Business Administration major in Marketing Management  prepares students for careers in marketing, advertising, market research, and public relations. It develops technical skills and strategic thinking essential for analyzing markets and promoting products effectively. The program also cultivates adaptability and creativity, enabling graduates to thrive in dynamic and competitive business environments.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN CHEMISTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['chemistry', 'science', 'laboratory', 'molecules', 'reactions', 'compounds', 'analysis', 'research', 'elements', 'experiments', 'chemical', 'atoms'],
    description: 'The Bachelor of Science in Chemistry equips students with a strong foundation in chemical principles across inorganic, organic, analytical, physical, and biochemical disciplines. Designed to meet evolving scientific and societal needs, the program emphasizes hands-on laboratory training, interdisciplinary research, and community-responsive projects that prepare graduates for careers in education, industry, environmental science, and public health. Students benefit from enriched learning environments, dedicated faculty mentorship, and exposure to collaborative initiatives aligned with national and global standards. Recent achievements include successful board passers, faculty-led research on sustainable materials, and strengthened linkages with government and industry partners. The program fosters scientific rigor and innovation, contributing to both local advancement and global relevance.'
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN CIVIL ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['engineering', 'construction', 'buildings', 'infrastructure', 'design', 'structures', 'roads', 'bridges', 'civil', 'planning', 'architecture', 'projects'],
    description: 'The Bachelor of Science in Civil Engineering trains students to design, build, and manage infrastructure, from roads and bridges to water supply and sanitation systems, with an emphasis on safety, sustainability, and community impact. Student experience blends rigorous theory with design studios, structural and materials labs, site inspections, and multi-disciplinary capstone projects that mirror real engineering practice. Graduates find work in consulting firms, government public works, construction management, structural design, and infrastructure planning, locally and internationally. The program is strengthened by faculty involvement in infrastructure research and collaborations that give students exposure to contemporary engineering challenges.'
  },
  // {
  //   college: 'CEGS',
  //   name: 'BACHELOR OF SCIENCE IN CIVIL ENGINEERING WITH SPECIALIZATION IN STRUCTURAL ENGINEERING',
  //   campus: 'MAIN',
  //   campusDesc: 'CSU Main',
  //   keywords: ['structures', 'engineering', 'buildings', 'design', 'construction', 'civil', 'architecture', 'bridges', 'safety', 'materials', 'structural', 'analysis'],
  //   description: 'Design safe and efficient structures'
  // },
  {
    college: 'CEIT',
    name: 'BACHELOR OF SCIENCE IN COMPUTER ENGINEERING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['computer', 'engineering', 'hardware', 'software', 'technology', 'programming', 'electronics', 'systems', 'digital', 'circuits', 'coding', 'networks'],
    description: 'The Bachelor of Science in Computer Engineering integrates the principles of computer science and electrical engineering to design, develop, and maintain computer systems, hardware, and software applications. It emphasizes analytical, technical, and problem-solving skills essential for creating innovative computing solutions. The program prepares graduates to design and integrate hardware-software systems while adapting to technological advancements through lifelong learning. BSCpE graduates are equipped for professional engineering practice in diverse fields such as systems design, networking, and embedded technologies.'
  },
  {
    college: 'CCIS',
    name: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['programming', 'computer', 'software', 'coding', 'technology', 'algorithms', 'development', 'IT', 'digital', 'systems', 'apps', 'web'],
    description: 'The Bachelor of Science in Computer Science provides students with a strong foundation in computing concepts, algorithms, programming, and software engineering, balancing theoretical and practical aspects of the field. Its curriculum includes core areas such as computer architecture, data structures, databases, operating systems, networks, artificial intelligence, and theory of computation. Guided by CMO No. 25, s. 2015, the program integrates general education courses, common computing core subjects, professional and elective courses, and domain-specific topics. Students are also required to complete practicum work and a thesis project. Overall, the BSCS program develops analytical, mathematical, and research skills essential for innovation and real-world problem-solving in computing.'
  },
  {
    college: 'CEIT',
    name: 'BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electrical', 'engineering', 'power', 'circuits', 'electronics', 'energy', 'electricity', 'systems', 'design', 'technology', 'wiring', 'voltage'],
    description: 'The Bachelor of Science in Electrical Engineering focuses on the conceptualization, design, development, and application of safe, ethical, and sustainable systems for generating, transmitting, distributing, and utilizing electrical energy. It integrates mathematics, physical sciences, information technology, and allied disciplines to equip students with technical and analytical expertise. As one of the broadest engineering fields, it prepares graduates to address diverse challenges in power systems, electronics, and energy management while promoting innovation and social responsibility in the profession.'
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN ELECTRONICS ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['electronics', 'engineering', 'circuits', 'technology', 'devices', 'signals', 'design', 'systems', 'communication', 'hardware', 'digital', 'microcontrollers'],
    description: 'The Bachelor of Science in Electronics Engineering focuses on electronic systems, instrumentation, control, telecommunications, and embedded systems, equipping students to design, build, and troubleshoot modern electronic solutions. Learning is project-based – circuit labs, microcontroller and PLC projects, and industry-linked design tasks give students practical, job-ready skills. Career opportunities include roles in electronics design and manufacturing, automation, telecommunications, instrumentation, and R&D in both private and public sectors. The department’s graduates have a track record of performing well in licensure exams and participating in technical competitions and industry training programs.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN ENTREPRENEURSHIP',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['business', 'startup', 'entrepreneurship', 'management', 'innovation', 'venture', 'leadership', 'planning', 'strategy', 'enterprise', 'owner', 'company'],
    description: 'The Bachelor of Science in Entrepreneurship equips aspiring entrepreneurs with the knowledge, skills, and attitudes needed to successfully start, manage, and sustain business ventures. Through a blend of classroom learning and experiential activities, the program enhances students’ entrepreneurial mindset and strategic decision-making abilities. Graduates are prepared to establish their own businesses or take on roles in business development, corporate planning, and related fields in public, private, or non-government organizations.'
  },
  {
    college: 'COFES',
    name: 'BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['environment', 'ecology', 'conservation', 'sustainability', 'nature', 'climate', 'pollution', 'green', 'ecosystem', 'earth', 'wildlife', 'renewable'],
    description: 'The Bachelor of Science in Environmental Science program integrates core disciplines such as biology, chemistry, physics, earth and marine sciences, and mathematics to provide a strong scientific foundation in understanding environmental systems. It also incorporates training in the social sciences to help students recognize the vital role of ethics, culture, and society in addressing environmental issues. The program emphasizes research, environmental assessment, and sustainable resource management, preparing students to analyze and develop solutions to real-world ecological challenges. Graduates are equipped to become environmental analysts, researchers, educators, and advocates who contribute to sustainable development and the protection of natural resources for future generations.'
  },
  {
    college: 'COFES',
    name: 'BACHELOR OF SCIENCE IN FORESTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['forest', 'trees', 'forestry', 'conservation', 'environment', 'wildlife', 'nature', 'logging', 'sustainable', 'ecosystem', 'wood', 'management'],
    description: 'The Bachelor of Science in Forestry program develops competent and ethical foresters equipped with scientific knowledge, technical skills, and values for sustainable forest resource management. Students gain hands-on experience through field laboratories, practicum, and research in forest inventory, wood identification, biodiversity monitoring, and environmental assessment. Graduates pursue careers in government, private industry, research, NGOs, and international institutions as forest managers, environmental planners, or sustainability officers. The program takes pride in producing board topnotchers and outstanding graduates, reflecting its strong academic foundation and dedicated faculty. Through holistic learning and practical exposure, BS Forestry students are molded into environmental stewards and future leaders in sustainable forest and ecosystem management.'
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN GEODETIC ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['surveying', 'mapping', 'engineering', 'land', 'GPS', 'measurements', 'geodesy', 'geography', 'coordinates', 'boundaries', 'topography', 'spatial'],
    description: 'The Bachelor of Science in Geodetic Engineering develops expertise in land surveying, geospatial mapping, and positioning technologies (GNSS, remote sensing, GIS) that underpin infrastructure planning and natural resource management. Students learn precision measurement, data processing, and mapping through field surveying exercises, GIS labs, and capstone mapping projects that build professional portfolios. Graduates work as licensed geodetic engineers, surveyors, GIS specialists, mapping consultants, and in sectors such as infrastructure, urban planning, and disaster risk management. The program is known for producing graduates who are ready for licensing and for contributing to regional land development and cadastral projects.'
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN GEOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['geology', 'earth', 'rocks', 'minerals', 'science', 'mining', 'soil', 'fossils', 'geography', 'natural', 'landscape', 'geological'],
    description: 'The Bachelor of Science in Geology teaches earth-system science, mineralogy, stratigraphy, and applied field methods to understand natural resources and geohazards. Students spend significant time in the field, conducting mapping, sampling, and site investigations, complemented by laboratory mineral analysis and interpretation exercises. Career paths include exploration and mining geology, environmental geology, geological consultancy, hazard assessment, and roles in government resource agencies. The program’s practical, field-oriented training and ties to regional resource studies help graduates transition quickly into industry and research roles.'
  },
  {
    college: 'CTHM',
    name: 'BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['hospitality', 'hotel', 'tourism', 'management', 'service', 'restaurant', 'food', 'guest', 'accommodation', 'travel', 'events', 'customer'],
    description: 'The Bachelor of Science in Hospitality Management prepares students for careers in the dynamic hospitality industry by developing their competencies in food production, accommodation services, and food and beverage management. The program emphasizes operational excellence, customer service, and management skills essential for running hotels, restaurants, resorts, and other hospitality-related establishments. Graduates are equipped to perform and lead in both local and international hospitality sectors with professionalism and industry-relevant expertise.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ARCHITECTURAL DRAFTING TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['drafting', 'architecture', 'design', 'drawing', 'blueprints', 'CAD', 'buildings', 'technical', 'plans', 'construction', 'structures', 'layout'],
    description: 'The Bachelor of Industrial Technology – Major in Architectural Drafting Technology equips students with technical knowledge and practical skills in architectural drawing, computer-aided design (CAD), and construction detailing. The program prepares graduates to assist architects and engineers in design and planning, contributing to the construction and infrastructure sectors through precision drafting and technical documentation.'
  },
  {
 college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN AUTOMOTIVE TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['automotive', 'cars', 'vehicles', 'mechanics', 'engines', 'repair', 'technology', 'maintenance', 'transportation', 'automobile', 'motors', 'driving'],
    description: 'The Bachelor of Industrial Technology – Major in Automotive Technology provides students with comprehensive training in automotive servicing, engine systems, diagnostics, and repair. The program develops technologists who can ensure vehicle efficiency and safety, apply sustainable practices in automotive industries, and perform supervisory and managerial roles in service and manufacturing enterprises.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN CIVIL AND CONSTRUCTION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['construction', 'building', 'civil', 'technology', 'infrastructure', 'materials', 'projects', 'contractor', 'structures', 'roads', 'concrete', 'fabrication'],
    description: 'The Bachelor of Industrial Technology – Major in Construction Technology focuses on construction methods, materials, project supervision, and cost estimation. Students are trained to support engineers and contractors in building design, infrastructure development, and construction management while promoting innovation and adherence to safety and environmental standards.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ELECTRICAL TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electrical', 'wiring', 'power', 'technology', 'circuits', 'installation', 'electricity', 'systems', 'maintenance', 'voltage', 'lights', 'energy'],
    description: 'The Bachelor of Industrial Technology – Major in Electrical Technology provides hands-on training in electrical systems installation, power distribution, control systems, and maintenance. The program prepares graduates to become competent electrical technologists capable of ensuring efficient energy use and compliance with national electrical standards across various industries.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ELECTRONICS TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electronics', 'technology', 'circuits', 'devices', 'repair', 'systems', 'digital', 'hardware', 'equipment', 'troubleshooting', 'communication', 'signals'],
    description: 'The Bachelor of Industrial Technology – Major in Electronics Technology trains students in the principles and applications of electronic systems, instrumentation, and automation. It prepares technologists for work in electronics manufacturing, telecommunications, and industrial control systems, with an emphasis on innovation, troubleshooting, and systems integration.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN FOOD AND SERVICE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['food', 'service', 'management', 'restaurant', 'culinary', 'hospitality', 'catering', 'cooking', 'kitchen', 'menu', 'customer', 'dining'],
    description: 'The Bachelor of Industrial Technology – Major in Culinary Technology  integrates culinary arts and food science to develop professionals skilled in food preparation, production, and innovation. The program combines technical culinary competencies with management and entrepreneurial skills, enabling graduates to thrive in the hospitality, food service, and catering industries.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN GARMENTS, FASHION AND DESIGN',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['fashion', 'design', 'garments', 'clothing', 'sewing', 'textiles', 'apparel', 'style', 'creative', 'fabrics', 'pattern', 'tailoring'],
    description: 'The Bachelor of Industrial Technology – Major in Apparel, Fashion, and Design develops students’ creative and technical competencies in garment construction, pattern making, and fashion design. The program nurtures technologists who can apply innovative techniques and sustainable practices in apparel production, merchandising, and fashion entrepreneurship.'
  },
  {
     college: 'CITTE',
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN WELDING AND FABRICATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['welding', 'metal', 'fabrication', 'technology', 'manufacturing', 'construction', 'steel', 'machinery', 'industrial', 'repair', 'joining', 'workshop'],
    description: 'The BSIndTech major in Welding and Fabrication Technology prepares students for careers in metal fabrication, structural welding, and industrial manufacturing. It emphasizes mastery of welding techniques, blueprint reading, and safety standards, producing skilled technologists capable of contributing to construction, shipbuilding, and manufacturing industries.'
  },
  {
    college: 'CCIS',
    name: 'BACHELOR OF SCIENCE IN INFORMATION SYSTEM',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['information', 'systems', 'IT', 'technology', 'business', 'database', 'management', 'software', 'computer', 'data', 'network', 'digital'],
    description: 'The Bachelor of Science in Information System includes the study of applications and the effects of information technology on organizations. Graduates of the program should be able to implement an information system that considers complex technological and organizational factors affecting it. These include components, tools, techniques, strategies, methodologies, and the like. Graduates are able to help an organization determine how information and technology-enabled business processes can be used as a strategic tool to achieve a competitive advantage. As a result, IS professionals require a sound understanding of organizational principles and practices so that they can serve as an effective bridge between the technical and management/users’ communities within an organization. This enables them to ensure that the organization has the information and the systems it needs to support its operations.'
  },
  {
    college: 'CEIT',
    name: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['IT', 'technology', 'computer', 'programming', 'software', 'network', 'systems', 'digital', 'web', 'development', 'database', 'support'],
    description: 'The Bachelor of Science in Information Technology includes the study of the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure that provides computing solutions to address the needs of an organization. The program prepares graduates to address various user needs involving the selection, development, application, integration, and management of computing technologies within an organization. The curriculum also includes fundamentals and applied practice such as core information technologies of human-computer interaction, information management, programming, web systems and technologies, networking, System administration and system maintenance, and System integration and system architecture.'
  },
  {
    college: 'CCIS',
    name: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['IT', 'technology', 'computer', 'programming', 'software', 'network', 'systems', 'digital', 'web', 'development', 'database', 'support'],
    description: 'The Bachelor of Science in Information Technology includes the study of the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure that provides computing solutions to address the needs of an organization. The program prepares graduates to address various user needs involving the selection, development, application, integration, and management of computing technologies within an organization. The curriculum also includes fundamentals and applied practice such as core information technologies of human-computer interaction, information management, programming, web systems and technologies, networking, System administration and system maintenance, and System integration and system architecture.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN MANAGEMENT ACCOUNTING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['accounting', 'management', 'finance', 'business', 'financial', 'budget', 'cost', 'analysis', 'reports', 'bookkeeping', 'taxation', 'planning'],
    description: 'The Bachelor of Science in Management Accounting prepares students for professional practice by developing their technical competence, analytical skills, and ethical foundation in accounting and business management. It integrates key areas such as accounting, finance, organizational management, and information technology to equip graduates for decision-making and performance evaluation roles. '
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN MARINE BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['marine', 'ocean', 'sea', 'biology', 'aquatic', 'fish', 'water', 'ecology', 'research', 'coastal', 'conservation', 'underwater'],
    description: 'The Bachelor of Science in Marine Biology program is designed to provide students with comprehensive knowledge and practical skills in the study of marine life, ocean processes, and the complex interactions within marine ecosystems. It equips future marine biologists with scientific understanding and technical competence to manage, conserve, and sustainably utilize marine resources. Situated in the heart of the Coral Triangle, the Philippines possesses the fifth-longest coastline in the world and is globally recognized as the Center of Marine Shore Fish Biodiversity. These unique characteristics make the country an ideal location for studying marine science and biodiversity.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mathematics', 'math', 'numbers', 'algebra', 'calculus', 'statistics', 'geometry', 'logic', 'equations', 'analysis', 'problem-solving', 'computation'],
    description: 'The Bachelor of Science in Mathematics offers a rigorous foundation in mathematical theory, logic, and problem-solving. Students may pursue specialized tracks in Pure Mathematics, preparing them for graduate studies, research careers, or roles in higher education, or opt for the Teaching Track, which integrates Mathematics Education electives to equip future secondary school educators. This dual-track structure allows learners to align their academic journey with personal aspirations and professional goals. The program’s AACCUP Level II Reaccredited status affirms its commitment to quality instruction and academic excellence. Through intensive coursework and mentorship, students are empowered to contribute to the advancement of mathematical knowledge and education.'
  },
  {
    college: 'CEGS',
    name: 'BACHELOR OF SCIENCE IN MINING ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mining', 'engineering', 'minerals', 'extraction', 'geology', 'resources', 'excavation', 'underground', 'ore', 'coal', 'rocks', 'industrial'],
    description: 'The Bachelor of Science in Mining Engineering trains students in safe, efficient, and environmentally responsible extraction of mineral resources, with a strong emphasis on mine design, mineral processing, and geotechnical safety. The student experience combines classroom theory with practical labs, site visits, and industry internships that prepare graduates for operational and managerial roles in mining companies. Career paths span mine engineering, mineral processing, environmental compliance, consultancy, and regulatory work both locally and abroad. The program’s relevance is reinforced by industry partnerships and student participation in mining and safety competitions and workshops.'
  },
  {
    college: 'CBA',
    name: 'BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['office', 'administration', 'management', 'secretary', 'clerical', 'business', 'organization', 'documents', 'records', 'assistant', 'filing', 'coordination'],
    description: 'The Bachelor of Science in Office Administration program prepares students for professional careers in modern, technology-driven office environments. It equips learners with competencies in office management, communication, human relations, and administrative systems, enabling them to efficiently support organizational operations. Through outcomes-based learning, simulations, and internships, students gain practical experience and workplace readiness. Graduates are prepared for administrative, supervisory, and managerial roles or to pursue self-employment opportunities.'
  },
  {
    college: 'CMNS',
    name: 'BACHELOR OF SCIENCE IN PHYSICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['physics', 'science', 'matter', 'energy', 'motion', 'forces', 'mechanics', 'quantum', 'research', 'laboratory', 'mathematics', 'universe'],
    description: 'The Bachelor of Science in Physics develops a strong foundation in theoretical, experimental, and computational physics, integrated with modern research. Students engage in hands-on experiments, collaborate with leading faculty on innovative research, present their research works in conferences, and explore advanced coursework. Immersion opportunities at national and international agencies and laboratories provide students with real-world experiences leading to future careers such as researcher, scientist, data analyst, science communicator, and educator.'
  },
  {
    college: 'CHASS',
    name: 'BACHELOR OF SCIENCE IN PSYCHOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['psychology', 'mental', 'behavior', 'mind', 'counseling', 'therapy', 'human', 'emotion', 'brain', 'research', 'development', 'cognition'],
    description: 'The Bachelor of Science in Psychology program equips students to understand human behavior, mental processes, and overall well-being through quality education and research. It provides a dynamic learning environment that integrates theory, practice, and community engagement, preparing graduates for careers in mental health, education, research, and human resource management. Guided by dedicated faculty and enriched with experiential learning, students develop the skills to become compassionate and competent practitioners. The CSU Department of Psychology has been recognized as a Top 5 Performing School in the 2023 and 2025 Psychometrician Board Licensure Examinations, proudly producing three topnotchers in 2025. This distinction reflects the program’s commitment to excellence, student success, and professional readiness.'
  },
  {
    college: 'CHASS',
    name: 'BACHELOR OF SCIENCE IN SOCIAL WORK',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['social', 'welfare', 'community', 'help', 'counseling', 'support', 'people', 'services', 'assistance', 'advocacy', 'human', 'care'],
    description: 'The Bachelor of Science in Social Work program offers a uniquely enriching experience by combining rigorous academic coursework with extensive field placements in diverse community settings. Students gain hands-on experience, working alongside experienced professionals to address complex social issues, advocate for vulnerable populations, and develop practical skills while fostering empathy and social responsibility. Graduates are well-prepared for careers in child welfare, mental health, community development, policy advocacy, and related fields. The program is recognized for its excellence, consistently producing top-performing students and multiple topnotchers in the national social work licensure examination. This distinction reflects its strong academic foundation, commitment to student success, and dedication to shaping competent, socially responsible professionals.'
  },
  {
     college: 'CTHM',
    name: 'BACHELOR OF SCIENCE IN TOURISM MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['tourism', 'travel', 'management', 'hospitality', 'destinations', 'tours', 'vacation', 'hotel', 'business', 'service', 'adventure', 'cultural'],
    description: 'The Bachelor of Science in Tourism Management focuses on equipping students with the knowledge and skills required for tourism planning, product development, travel and tour operations, events management, and transportation services. It emphasizes sustainable tourism practices and effective destination management to meet global standards. Graduates are prepared to take on roles in the tourism and travel industry, capable of promoting, organizing, and managing tourism-related programs and enterprises.'
  },
  {
    college: 'CED',
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN ENGLISH',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'English', 'education', 'language', 'literature', 'grammar', 'secondary', 'high school', 'students', 'writing', 'reading', 'communication'],
       description: 'The Bachelor of Elementary Education program is designed to prepare its students to become competent, upright, and service-oriented elementary school teachers. This program is Level IV Re-Accredited by AACCUP, a mark of excellence in instruction, research, and community engagement. Students enjoy a dynamic learning experience enriched by expert faculty, hands-on teaching practice, and a supportive academic environment. Graduates of the program are highly sought-after, with career opportunities in both public and private schools, local and international educational institutions, and community-based learning programs. The program proudly celebrates six LEPT topnotchers, a Top 9 national ranking in the recent Licensure Exam for Professional Teachers, and the prestigious EQUATE Award from CHED, a testament to its commitment to quality and innovation in teacher education.'

  },
  {
    college: 'CED',
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN FILIPINO',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'Filipino', 'education', 'language', 'culture', 'secondary', 'high school', 'students', 'literature', 'writing', 'native', 'panitikan'],
     description: 'The Bachelor of Elementary Education program is designed to prepare its students to become competent, upright, and service-oriented elementary school teachers. This program is Level IV Re-Accredited by AACCUP, a mark of excellence in instruction, research, and community engagement. Students enjoy a dynamic learning experience enriched by expert faculty, hands-on teaching practice, and a supportive academic environment. Graduates of the program are highly sought-after, with career opportunities in both public and private schools, local and international educational institutions, and community-based learning programs. The program proudly celebrates six LEPT topnotchers, a Top 9 national ranking in the recent Licensure Exam for Professional Teachers, and the prestigious EQUATE Award from CHED, a testament to its commitment to quality and innovation in teacher education.'

  },
  {
    college: 'CED',
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'mathematics', 'education', 'math', 'numbers', 'secondary', 'high school', 'students', 'algebra', 'geometry', 'calculus', 'problem-solving'],
     description: 'The Bachelor of Elementary Education program is designed to prepare its students to become competent, upright, and service-oriented elementary school teachers. This program is Level IV Re-Accredited by AACCUP, a mark of excellence in instruction, research, and community engagement. Students enjoy a dynamic learning experience enriched by expert faculty, hands-on teaching practice, and a supportive academic environment. Graduates of the program are highly sought-after, with career opportunities in both public and private schools, local and international educational institutions, and community-based learning programs. The program proudly celebrates six LEPT topnotchers, a Top 9 national ranking in the recent Licensure Exam for Professional Teachers, and the prestigious EQUATE Award from CHED, a testament to its commitment to quality and innovation in teacher education.'

  },
  {
    college: 'CED',
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'science', 'education', 'secondary', 'high school', 'students', 'biology', 'chemistry', 'physics', 'laboratory', 'experiments', 'research'],
    description: 'The Bachelor of Elementary Education program is designed to prepare its students to become competent, upright, and service-oriented elementary school teachers. This program is Level IV Re-Accredited by AACCUP, a mark of excellence in instruction, research, and community engagement. Students enjoy a dynamic learning experience enriched by expert faculty, hands-on teaching practice, and a supportive academic environment. Graduates of the program are highly sought-after, with career opportunities in both public and private schools, local and international educational institutions, and community-based learning programs. The program proudly celebrates six LEPT topnotchers, a Top 9 national ranking in the recent Licensure Exam for Professional Teachers, and the prestigious EQUATE Award from CHED, a testament to its commitment to quality and innovation in teacher education.'

  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ARCHITECTURAL DRAFTING TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'drafting', 'architecture', 'technical', 'education', 'training', 'blueprints', 'CAD', 'design', 'students', 'skills'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Architectural Drafting prepares future educators to teach drafting and design-related courses in the Technical-Vocational-Livelihood (TVL) track of Senior High School and in technical institutions. It equips students with competencies in architectural drawing, computer-aided design (CAD), and construction planning, alongside pedagogical and industry-aligned skills necessary for effective instruction and workforce readiness.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN AUTOMOTIVE TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'automotive', 'cars', 'technical', 'education', 'training', 'mechanics', 'vehicles', 'repair', 'students', 'skills'],
    description: 'The Bachelor of Technical-Vocational Teacher Education  – Major in Automotive Technology develops future teachers who are competent in delivering instruction in automotive servicing and related trades in the TVL track and technical-vocational institutions. The curriculum blends technical proficiency in engine systems, vehicle diagnostics, and maintenance with outcomes-based pedagogical training, fostering educators who can apply industry standards and innovative teaching practices in automotive technology education.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN CIVIL AND CONSTRUCTION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'construction', 'building', 'technical', 'education', 'training', 'civil', 'students', 'skills', 'infrastructure', 'projects'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Civil and Construction Technology prepares students for teaching careers in construction, building maintenance, and civil technology fields. It integrates theoretical knowledge and practical training in structural design, construction materials, surveying, and project management. The program emphasizes both instructional competence and technical mastery to produce educators capable of aligning classroom learning with real-world industry practices.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ELECTRICAL TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'electrical', 'wiring', 'technical', 'education', 'training', 'power', 'circuits', 'students', 'skills', 'installation'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Electrical Technology equips future teachers with the technical and pedagogical competencies to deliver instruction in electrical systems and power distribution. The program provides a strong foundation in electrical installation, motor control, maintenance, and safety practices, while integrating educational theories and teaching methodologies to ensure effective learning delivery in TVL and TVET settings.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ELECTRONICS TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'electronics', 'circuits', 'technical', 'education', 'training', 'devices', 'systems', 'students', 'skills', 'technology'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Electronics Technology is designed to prepare pre-service teachers with both theoretical and hands-on competencies in electronic systems, instrumentation, and digital technologies. Emphasizing industry-based learning and outcomes-based pedagogy, the program enables graduates to teach electronics subjects effectively while meeting TESDA and industry standards in technical-vocational education.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN FOOD AND SERVICE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'food', 'service', 'technical', 'education', 'training', 'culinary', 'hospitality', 'management', 'students', 'skills'],
    description: 'The Bachelor of Technical-Vocational Teacher Education  – Major in Food and Service Management prepares students to teach culinary, hospitality, and food service operations in Senior High School and technical institutions. The curriculum integrates practical skills in food preparation, safety, and service management with educational principles and instructional design, cultivating competent and industry-ready educators for the hospitality and tourism sectors.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN GARMENTS, FASHION AND DESIGN',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'fashion', 'garments', 'technical', 'education', 'training', 'design', 'sewing', 'clothing', 'students', 'skills'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Garments, Fashion, and Design trains pre-service teachers to deliver instruction in apparel construction, pattern making, and fashion design. The program blends creative and technical competencies with pedagogical preparation, enabling graduates to teach and inspire learners in the fashion and garment industries while promoting innovation, entrepreneurship, and sustainability.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN WELDING AND FABRICATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'welding', 'metal', 'technical', 'education', 'training', 'fabrication', 'manufacturing', 'students', 'skills', 'workshop'],
    description: 'The Bachelor of Technical-Vocational Teacher Education – Major in Welding and Fabrication Technology provides students with technical expertise in welding processes, metal fabrication, and industrial safety, integrated with teaching methodologies suited for technical-vocational education. The program develops educators who can train learners to meet industry standards and contribute to workforce development in the manufacturing and construction sectors.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN HOME ECONOMICS',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'home economics', 'education', 'cooking', 'sewing', 'household', 'livelihood', 'skills', 'family', 'nutrition', 'students', 'domestic'],
    description: 'The Bachelor of Technology and Livelihood Education major in Home Economics is a four-year degree program that prepares future educators to effectively teach Technology and Livelihood Education (TLE) in Junior High School and Home Economics in Senior High School, following the K to 12 Basic Education Curriculum. Anchored on CHED CMO No. 78, s. 2017, the program integrates pedagogical expertise, technical proficiency, research skills, and values-driven instruction. It equips pre-service teachers with the competencies necessary to deliver quality instruction in areas such as food and nutrition, clothing, home management, and entrepreneurship for holistic learner development.'
  },
  {
    college: 'CITTE',
    name: 'BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN INDUSTRIAL ARTS',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'industrial', 'arts', 'education', 'crafts', 'technical', 'workshop', 'hands-on', 'livelihood', 'skills', 'students', 'practical'],
    description: 'The Bachelor of Technology and Livelihood Education major in Industrial Arts is a four-year degree program designed to prepare future teachers to competently deliver TLE subjects in Junior High School and Industrial Arts in Senior High School, aligned with the K to 12 Basic Education Curriculum. Guided by CHED CMO No. 78, s. 2017, the curriculum combines theoretical understanding, practical technical training, and values formation. It aims to develop educators who are skilled in woodworking, drafting, electricity, metalwork, and other industrial competencies, ensuring they are capable of fostering learners’ technical and vocational skills in a modern educational setting.'
  },
];

export default function handler(req, res) {
  const { method, query } = req;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  // Get all courses
  if (!query.search && !query.campus && !query.keyword) {
    return res.status(200).json({
      success: true,
      count: coursesDatabase.length,
      data: coursesDatabase
    });
  }

  let filteredCourses = [...coursesDatabase];

  // Filter by campus
  if (query.campus) {
    const campusFilter = query.campus.toUpperCase();
    filteredCourses = filteredCourses.filter(course => 
      course.campus === campusFilter
    );
  }

  // Search by course name
  if (query.search) {
    const searchTerm = query.search.toLowerCase();
    filteredCourses = filteredCourses.filter(course =>
      course.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by keyword
  if (query.keyword) {
    const keywordSearch = query.keyword.toLowerCase();
    filteredCourses = filteredCourses.filter(course =>
      course.keywords.some(kw => kw.toLowerCase().includes(keywordSearch))
    );
  }

   return res.status(200).json({
     success: true,
     version: "2.0", // Add this
     count: filteredCourses.length,
     data: filteredCourses
   });
}
