'use client';

import PageTemplate from '@/components/PageTemplate';
import { Building, Users, Briefcase } from 'lucide-react';

export default function NadimalliInformaticsPage() {
  return (
    <PageTemplate
      title="Nadimpalli Informatics LLP"
      subtitle="Institutional partner supporting excellence in technology education"
      sections={[
        {
          title: 'Organization Overview',
          description: 'Our committed institutional partner',
          icon: <Building className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
                Nadimpalli Informatics LLP is a forward-thinking technology organization dedicated to fostering excellence in engineering education. As an institutional partner of NSRIET, they contribute significantly to academic programs, industry collaboration, and student development initiatives.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { metric: '15+', label: 'Years of Partnership' },
                  { metric: '500+', label: 'Students Supported' },
                  { metric: '20+', label: 'Industry Projects' },
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="text-3xl font-bold text-corporate-blue mb-2">{stat.metric}</div>
                    <p className="text-xs text-corporate-navy dark:text-white font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          title: 'Contribution & Support',
          description: 'Areas of institutional support',
          icon: <Briefcase className="w-6 h-6" />,
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  area: 'Research & Innovation',
                  items: ['Funded research projects', 'Lab equipment support', 'Publication assistance']
                },
                {
                  area: 'Student Programs',
                  items: ['Internship opportunities', 'Scholarship funding', 'Career mentorship']
                },
                {
                  area: 'Curriculum Development',
                  items: ['Industry-focused courses', 'Project design', 'Skill training']
                },
                {
                  area: 'Infrastructure',
                  items: ['Lab setup & maintenance', 'Technology upgrades', 'Facility development']
                },
              ].map((section, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-4">{section.area}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                        <span className="text-corporate-textSecondary dark:text-gray-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'Contact & Collaboration',
          description: 'Partnership opportunities and contact information',
          icon: <Users className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Contact Details</h4>
                <div className="space-y-3 text-sm text-corporate-textSecondary dark:text-gray-400">
                  <div>
                    <p className="font-semibold text-corporate-navy dark:text-white">Organization</p>
                    Nadimpalli Informatics LLP
                  </div>
                  <div>
                    <p className="font-semibold text-corporate-navy dark:text-white">Email</p>
                    info@nadimpalli-informatics.com
                  </div>
                  <div>
                    <p className="font-semibold text-corporate-navy dark:text-white">Phone</p>
                    +91-XXXXXXXXXX
                  </div>
                  <div>
                    <p className="font-semibold text-corporate-navy dark:text-white">Website</p>
                    <a href="#" className="text-corporate-blue hover:opacity-80">www.nadimpalli-informatics.com</a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Collaboration Opportunities</h4>
                <p className="text-corporate-textSecondary dark:text-gray-400 text-sm mb-4">
                  Nadimpalli Informatics actively welcomes new partnerships and collaboration opportunities with educational institutions, research organizations, and industry bodies.
                </p>
                <button className="px-4 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                  Propose Collaboration
                </button>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
