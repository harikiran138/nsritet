'use client';

import { motion } from 'framer-motion';
import { Users, Building2, Award, GraduationCap, Briefcase, Users2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface OrganizationMember {
  title: string;
  name: string;
  icon?: React.ReactNode;
}

export default function GovernancePage() {
  const boardMembers: OrganizationMember[] = [
    {
      title: 'Chairman',
      name: 'Sri. N. S. Raju',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: 'Principal',
      name: 'Dr. Rajesh Kumar',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const administrationTeam: OrganizationMember[] = [
    {
      title: 'Vice Principal (Academics)',
      name: 'Dr. Priya Sharma',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: 'Vice Principal (Administration)',
      name: 'Prof. Anil Verma',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: 'Dean - Student Affairs',
      name: 'Dr. Meera Nair',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Dean - R&D',
      name: 'Dr. Prakash Iyer',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const departmentHeads: OrganizationMember[] = [
    {
      title: 'HOD - CSE',
      name: 'Dr. Kavitha Rao',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'HOD - ECE',
      name: 'Dr. Ramesh Kumar',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'HOD - Mechanical',
      name: 'Prof. Vijay Singh',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'HOD - Civil',
      name: 'Dr. Lakshmi Devi',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const governanceBodies = [
    {
      title: 'Academic Council',
      description: 'Oversees all academic programs, curriculum development, and quality assurance',
      members: 15,
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'Board of Studies',
      description: 'Department-wise boards for syllabus design and academic planning',
      members: 8,
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Finance Committee',
      description: 'Manages financial planning, budgets, and resource allocation',
      members: 7,
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'Student Welfare Committee',
      description: 'Addresses student concerns, welfare activities, and campus life',
      members: 12,
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-corporate-navy via-blue-900 to-corporate-dark text-white overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Users2 className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Governance Structure</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transparent and effective leadership ensuring academic excellence and institutional growth
            </p>
          </motion.div>
        </div>
      </section>

  <section className="py-20 bg-surface">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue mb-4">
                Organization Chart
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our hierarchical structure promoting efficiency and accountability
              </p>
            </div>
          </AnimatedSection>

          {/* Board of Directors */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-corporate-blue mb-6 text-center">Board of Directors</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-corporate-blue hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-corporate-blue flex-shrink-0">
                        {member.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-corporate-blue">{member.title}</h4>
                        <p className="text-gray-600 text-sm">{member.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Administration Team */}
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-corporate-blue mb-6 text-center">Administration & Academic Leadership</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {administrationTeam.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-corporate-blue hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-corporate-blue flex-shrink-0">
                        {member.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-corporate-blue text-sm">{member.title}</h4>
                        <p className="text-gray-600 text-xs">{member.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Department Heads */}
          <AnimatedSection delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold text-corporate-blue mb-6 text-center">Department Heads</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentHeads.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-corporate-blue hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-corporate-blue flex-shrink-0">
                        {member.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-corporate-blue text-sm">{member.title}</h4>
                        <p className="text-gray-600 text-xs">{member.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

  <section className="py-20 bg-card">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-corporate-blue mb-4">
                Governance Bodies
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Specialized committees ensuring comprehensive institutional management
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {governanceBodies.map((body, index) => (
              <AnimatedSection key={body.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {body.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-corporate-blue mb-1">
                        {body.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {body.members} Members
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {body.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
