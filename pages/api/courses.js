// pages/api/courses.js
// This file should be placed in: pages/api/courses.js

const coursesDatabase = [
  {
    name: 'BACHELOR OF ARTS IN SOCIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['society', 'social', 'community', 'culture', 'behavior', 'research', 'people', 'groups', 'human', 'development', 'issues', 'welfare'],
    description: 'Study social behavior, institutions, and community dynamics'
  },
  {
    name: 'BACHELOR OF ELEMENTARY EDUCATION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'children', 'education', 'learning', 'elementary', 'classroom', 'students', 'pedagogy', 'curriculum', 'instruction', 'kids', 'school'],
    description: 'Train to teach elementary school students'
  },
  {
    name: 'BACHELOR OF SCIENCE IN ACCOUNTANCY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['accounting', 'finance', 'business', 'auditing', 'taxation', 'financial', 'bookkeeping', 'CPA', 'money', 'numbers', 'budget', 'reports'],
    description: 'Master financial accounting and business management'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURAL AND BIOSYSTEMS ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['agriculture', 'engineering', 'farming', 'machinery', 'irrigation', 'technology', 'systems', 'design', 'rural', 'food', 'production', 'automation'],
    description: 'Design agricultural systems and machinery'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['farming', 'agriculture', 'crops', 'livestock', 'rural', 'food', 'production', 'agribusiness', 'plants', 'soil', 'harvest', 'sustainable'],
    description: 'Study agricultural practices and food production'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRIBUSINESS MANAGEMENT',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['agribusiness', 'business', 'agriculture', 'management', 'farming', 'entrepreneurship', 'marketing', 'economics', 'rural', 'finance', 'trade', 'supply'],
    description: 'Manage agricultural business operations'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRICULTURAL ECONOMICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['economics', 'agriculture', 'business', 'finance', 'market', 'trade', 'farming', 'rural', 'policy', 'development', 'production', 'analysis'],
    description: 'Study economic aspects of agriculture'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN AGRONOMY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['crops', 'plants', 'farming', 'agriculture', 'soil', 'cultivation', 'seeds', 'harvest', 'production', 'field', 'growth', 'yield'],
    description: 'Focus on crop production and soil management'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN ANIMAL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['animals', 'livestock', 'farming', 'veterinary', 'cattle', 'poultry', 'breeding', 'nutrition', 'husbandry', 'meat', 'dairy', 'genetics'],
    description: 'Study animal production and livestock management'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN CROP PROTECTION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['crops', 'pests', 'diseases', 'protection', 'agriculture', 'pesticides', 'farming', 'plants', 'prevention', 'control', 'harvest', 'safety'],
    description: 'Protect crops from pests and diseases'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN HORTICULTURE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['plants', 'gardens', 'horticulture', 'vegetables', 'fruits', 'flowers', 'landscaping', 'cultivation', 'nursery', 'greenhouse', 'ornamental', 'growing'],
    description: 'Cultivate fruits, vegetables, and ornamental plants'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGRICULTURE MAJOR IN SOIL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['soil', 'agriculture', 'earth', 'fertility', 'nutrients', 'farming', 'crops', 'geology', 'analysis', 'chemistry', 'conservation', 'land'],
    description: 'Study soil properties and management'
  },
  {
    name: 'BACHELOR OF SCIENCE IN AGROFORESTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['trees', 'forestry', 'agriculture', 'farming', 'environment', 'sustainable', 'plants', 'conservation', 'ecosystem', 'land', 'agroforest', 'crops'],
    description: 'Integrate trees and agriculture sustainably'
  },
  {
    name: 'BACHELOR OF SCIENCE IN APPLIED MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mathematics', 'math', 'numbers', 'calculus', 'statistics', 'modeling', 'analysis', 'computation', 'problem-solving', 'logic', 'equations', 'data'],
    description: 'Apply mathematical principles to solve problems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['biology', 'life', 'organisms', 'science', 'cells', 'genetics', 'ecology', 'laboratory', 'research', 'nature', 'living', 'health'],
    description: 'Study living organisms and life processes'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN BIODIVERSITY CONSERVATION',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['biodiversity', 'conservation', 'environment', 'species', 'ecology', 'wildlife', 'nature', 'protection', 'endangered', 'habitat', 'ecosystem', 'sustainability'],
    description: 'Conserve and protect biological diversity'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN ENTOMOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['insects', 'bugs', 'entomology', 'biology', 'pests', 'ecology', 'species', 'research', 'larvae', 'beetles', 'butterflies', 'study'],
    description: 'Study insects and their behavior'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN MEDICAL BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['medical', 'biology', 'health', 'disease', 'laboratory', 'research', 'clinical', 'medicine', 'cells', 'diagnosis', 'human', 'healthcare'],
    description: 'Apply biology to medical and health fields'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN MICROBIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['microorganisms', 'bacteria', 'virus', 'biology', 'laboratory', 'microbes', 'germs', 'research', 'cells', 'pathogens', 'microbiology', 'health'],
    description: 'Study microorganisms and their effects'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BIOLOGY MAJOR IN PLANT BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['plants', 'botany', 'biology', 'photosynthesis', 'agriculture', 'ecology', 'growth', 'species', 'research', 'nature', 'vegetation', 'cells'],
    description: 'Study plant life and botanical sciences'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN FINANCIAL MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['finance', 'business', 'management', 'investment', 'money', 'accounting', 'banking', 'economics', 'budget', 'financial', 'assets', 'analysis'],
    description: 'Manage financial resources and investments'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN HUMAN RESOURCE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['human resources', 'HR', 'people', 'management', 'recruitment', 'employees', 'business', 'training', 'workforce', 'personnel', 'hiring', 'development'],
    description: 'Manage employee relations and workforce'
  },
  {
    name: 'BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN MARKETING MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['marketing', 'business', 'advertising', 'sales', 'branding', 'promotion', 'strategy', 'consumer', 'management', 'digital', 'market', 'campaigns'],
    description: 'Develop marketing strategies and campaigns'
  },
  {
    name: 'BACHELOR OF SCIENCE IN CHEMISTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['chemistry', 'science', 'laboratory', 'molecules', 'reactions', 'compounds', 'analysis', 'research', 'elements', 'experiments', 'chemical', 'atoms'],
    description: 'Study chemical properties and reactions'
  },
  {
    name: 'BACHELOR OF SCIENCE IN CIVIL ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['engineering', 'construction', 'buildings', 'infrastructure', 'design', 'structures', 'roads', 'bridges', 'civil', 'planning', 'architecture', 'projects'],
    description: 'Design and build infrastructure projects'
  },
  {
    name: 'BACHELOR OF SCIENCE IN CIVIL ENGINEERING WITH SPECIALIZATION IN STRUCTURAL ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['structures', 'engineering', 'buildings', 'design', 'construction', 'civil', 'architecture', 'bridges', 'safety', 'materials', 'structural', 'analysis'],
    description: 'Design safe and efficient structures'
  },
  {
    name: 'BACHELOR OF SCIENCE IN COMPUTER ENGINEERING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['computer', 'engineering', 'hardware', 'software', 'technology', 'programming', 'electronics', 'systems', 'digital', 'circuits', 'coding', 'networks'],
    description: 'Develop computer hardware and software systems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['programming', 'computer', 'software', 'coding', 'technology', 'algorithms', 'development', 'IT', 'digital', 'systems', 'apps', 'web'],
    description: 'Study software development and computing'
  },
  {
    name: 'BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electrical', 'engineering', 'power', 'circuits', 'electronics', 'energy', 'electricity', 'systems', 'design', 'technology', 'wiring', 'voltage'],
    description: 'Design electrical systems and power solutions'
  },
  {
    name: 'BACHELOR OF SCIENCE IN ELECTRONICS ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['electronics', 'engineering', 'circuits', 'technology', 'devices', 'signals', 'design', 'systems', 'communication', 'hardware', 'digital', 'microcontrollers'],
    description: 'Develop electronic devices and systems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN ENTREPRENEURSHIP',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['business', 'startup', 'entrepreneurship', 'management', 'innovation', 'venture', 'leadership', 'planning', 'strategy', 'enterprise', 'owner', 'company'],
    description: 'Start and manage your own business'
  },
  {
    name: 'BACHELOR OF SCIENCE IN ENVIRONMENTAL SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['environment', 'ecology', 'conservation', 'sustainability', 'nature', 'climate', 'pollution', 'green', 'ecosystem', 'earth', 'wildlife', 'renewable'],
    description: 'Study and protect environmental systems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN FORESTRY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['forest', 'trees', 'forestry', 'conservation', 'environment', 'wildlife', 'nature', 'logging', 'sustainable', 'ecosystem', 'wood', 'management'],
    description: 'Manage forest resources sustainably'
  },
  {
    name: 'BACHELOR OF SCIENCE IN GEODETIC ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['surveying', 'mapping', 'engineering', 'land', 'GPS', 'measurements', 'geodesy', 'geography', 'coordinates', 'boundaries', 'topography', 'spatial'],
    description: 'Survey and map land and properties'
  },
  {
    name: 'BACHELOR OF SCIENCE IN GEOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['geology', 'earth', 'rocks', 'minerals', 'science', 'mining', 'soil', 'fossils', 'geography', 'natural', 'landscape', 'geological'],
    description: 'Study Earth\'s structure and materials'
  },
  {
    name: 'BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['hospitality', 'hotel', 'tourism', 'management', 'service', 'restaurant', 'food', 'guest', 'accommodation', 'travel', 'events', 'customer'],
    description: 'Manage hotels and hospitality services'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ARCHITECTURAL DRAFTING TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['drafting', 'architecture', 'design', 'drawing', 'blueprints', 'CAD', 'buildings', 'technical', 'plans', 'construction', 'structures', 'layout'],
    description: 'Create architectural drawings and plans'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN AUTOMOTIVE TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['automotive', 'cars', 'vehicles', 'mechanics', 'engines', 'repair', 'technology', 'maintenance', 'transportation', 'automobile', 'motors', 'driving'],
    description: 'Service and repair automotive vehicles'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN CIVIL AND CONSTRUCTION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['construction', 'building', 'civil', 'technology', 'infrastructure', 'materials', 'projects', 'contractor', 'structures', 'roads', 'concrete', 'fabrication'],
    description: 'Execute construction and building projects'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ELECTRICAL TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electrical', 'wiring', 'power', 'technology', 'circuits', 'installation', 'electricity', 'systems', 'maintenance', 'voltage', 'lights', 'energy'],
    description: 'Install and maintain electrical systems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN ELECTRONICS TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['electronics', 'technology', 'circuits', 'devices', 'repair', 'systems', 'digital', 'hardware', 'equipment', 'troubleshooting', 'communication', 'signals'],
    description: 'Work with electronic systems and devices'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN FOOD AND SERVICE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['food', 'service', 'management', 'restaurant', 'culinary', 'hospitality', 'catering', 'cooking', 'kitchen', 'menu', 'customer', 'dining'],
    description: 'Manage food service operations'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN GARMENTS, FASHION AND DESIGN',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['fashion', 'design', 'garments', 'clothing', 'sewing', 'textiles', 'apparel', 'style', 'creative', 'fabrics', 'pattern', 'tailoring'],
    description: 'Design and create fashion garments'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INDUSTRIAL TECHNOLOGY MAJOR IN WELDING AND FABRICATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['welding', 'metal', 'fabrication', 'technology', 'manufacturing', 'construction', 'steel', 'machinery', 'industrial', 'repair', 'joining', 'workshop'],
    description: 'Weld and fabricate metal structures'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INFORMATION SYSTEM',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['information', 'systems', 'IT', 'technology', 'business', 'database', 'management', 'software', 'computer', 'data', 'network', 'digital'],
    description: 'Manage information technology systems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['IT', 'technology', 'computer', 'programming', 'software', 'network', 'systems', 'digital', 'web', 'development', 'database', 'support'],
    description: 'Develop and manage IT solutions'
  },
  {
    name: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['IT', 'technology', 'computer', 'programming', 'software', 'network', 'systems', 'digital', 'web', 'development', 'database', 'support'],
    description: 'Develop and manage IT solutions'
  },
  {
    name: 'BACHELOR OF SCIENCE IN MANAGEMENT ACCOUNTING',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['accounting', 'management', 'finance', 'business', 'financial', 'budget', 'cost', 'analysis', 'reports', 'bookkeeping', 'taxation', 'planning'],
    description: 'Provide accounting for management decisions'
  },
  {
    name: 'BACHELOR OF SCIENCE IN MARINE BIOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['marine', 'ocean', 'sea', 'biology', 'aquatic', 'fish', 'water', 'ecology', 'research', 'coastal', 'conservation', 'underwater'],
    description: 'Study marine life and ocean ecosystems'
  },
  {
    name: 'BACHELOR OF SCIENCE IN MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mathematics', 'math', 'numbers', 'algebra', 'calculus', 'statistics', 'geometry', 'logic', 'equations', 'analysis', 'problem-solving', 'computation'],
    description: 'Study advanced mathematical concepts'
  },
  {
    name: 'BACHELOR OF SCIENCE IN MINING ENGINEERING',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['mining', 'engineering', 'minerals', 'extraction', 'geology', 'resources', 'excavation', 'underground', 'ore', 'coal', 'rocks', 'industrial'],
    description: 'Extract minerals and manage mining operations'
  },
  {
    name: 'BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['office', 'administration', 'management', 'secretary', 'clerical', 'business', 'organization', 'documents', 'records', 'assistant', 'filing', 'coordination'],
    description: 'Manage office operations and administration'
  },
  {
    name: 'BACHELOR OF SCIENCE IN PHYSICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['physics', 'science', 'matter', 'energy', 'motion', 'forces', 'mechanics', 'quantum', 'research', 'laboratory', 'mathematics', 'universe'],
    description: 'Study the fundamental laws of nature'
  },
  {
    name: 'BACHELOR OF SCIENCE IN PSYCHOLOGY',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['psychology', 'mental', 'behavior', 'mind', 'counseling', 'therapy', 'human', 'emotion', 'brain', 'research', 'development', 'cognition'],
    description: 'Understand human behavior and mental processes'
  },
  {
    name: 'BACHELOR OF SCIENCE IN SOCIAL WORK',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['social', 'welfare', 'community', 'help', 'counseling', 'support', 'people', 'services', 'assistance', 'advocacy', 'human', 'care'],
    description: 'Provide social services and community support'
  },
  {
    name: 'BACHELOR OF SCIENCE IN TOURISM MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['tourism', 'travel', 'management', 'hospitality', 'destinations', 'tours', 'vacation', 'hotel', 'business', 'service', 'adventure', 'cultural'],
    description: 'Manage tourism and travel services'
  },
  {
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN ENGLISH',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'English', 'education', 'language', 'literature', 'grammar', 'secondary', 'high school', 'students', 'writing', 'reading', 'communication'],
    description: 'Teach English at secondary level'
  },
  {
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN FILIPINO',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'Filipino', 'education', 'language', 'culture', 'secondary', 'high school', 'students', 'literature', 'writing', 'native', 'panitikan'],
    description: 'Teach Filipino language and culture'
  },
  {
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'mathematics', 'education', 'math', 'numbers', 'secondary', 'high school', 'students', 'algebra', 'geometry', 'calculus', 'problem-solving'],
    description: 'Teach mathematics at secondary level'
  },
  {
    name: 'BACHELOR OF SECONDARY EDUCATION MAJOR IN SCIENCE',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'science', 'education', 'secondary', 'high school', 'students', 'biology', 'chemistry', 'physics', 'laboratory', 'experiments', 'research'],
    description: 'Teach science subjects at secondary level'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ARCHITECTURAL DRAFTING TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'drafting', 'architecture', 'technical', 'education', 'training', 'blueprints', 'CAD', 'design', 'students', 'skills'],
    description: 'Teach architectural drafting in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN AUTOMOTIVE TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'automotive', 'cars', 'technical', 'education', 'training', 'mechanics', 'vehicles', 'repair', 'students', 'skills'],
    description: 'Teach automotive technology in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN CIVIL AND CONSTRUCTION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'construction', 'building', 'technical', 'education', 'training', 'civil', 'students', 'skills', 'infrastructure', 'projects'],
    description: 'Teach construction technology in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ELECTRICAL TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'electrical', 'wiring', 'technical', 'education', 'training', 'power', 'circuits', 'students', 'skills', 'installation'],
    description: 'Teach electrical technology in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN ELECTRONICS TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'electronics', 'circuits', 'technical', 'education', 'training', 'devices', 'systems', 'students', 'skills', 'technology'],
    description: 'Teach electronics technology in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN FOOD AND SERVICE MANAGEMENT',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'food', 'service', 'technical', 'education', 'training', 'culinary', 'hospitality', 'management', 'students', 'skills'],
    description: 'Teach food service management in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN GARMENTS, FASHION AND DESIGN',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'fashion', 'garments', 'technical', 'education', 'training', 'design', 'sewing', 'clothing', 'students', 'skills'],
    description: 'Teach fashion and garment design in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNICAL VOCATIONAL TEACHER EDUCATION MAJOR IN WELDING AND FABRICATION TECHNOLOGY',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'vocational', 'welding', 'metal', 'technical', 'education', 'training', 'fabrication', 'manufacturing', 'students', 'skills', 'workshop'],
    description: 'Teach welding and fabrication in vocational schools'
  },
  {
    name: 'BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN HOME ECONOMICS',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'home economics', 'education', 'cooking', 'sewing', 'household', 'livelihood', 'skills', 'family', 'nutrition', 'students', 'domestic'],
    description: 'Teach home economics and livelihood skills'
  },
  {
    name: 'BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN INDUSTRIAL ARTS',
    campus: 'CSUCC',
    campusDesc: 'CSU Cabadbaran',
    keywords: ['teaching', 'industrial', 'arts', 'education', 'crafts', 'technical', 'workshop', 'hands-on', 'livelihood', 'skills', 'students', 'practical'],
    description: 'Teach industrial arts and technical skills'
  },
  {
    name: 'TEACHERS CERTIFICATE PROGRAM',
    campus: 'MAIN',
    campusDesc: 'CSU Main',
    keywords: ['teaching', 'education', 'certificate', 'training', 'professional', 'classroom', 'students', 'pedagogy', 'instructor', 'license', 'qualification', 'educators'],
    description: 'Obtain teaching certification and credentials'
  }
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
    count: filteredCourses.length,
    data: filteredCourses
  });
}