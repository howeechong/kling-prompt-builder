'use client';

import React, { useMemo, useState } from 'react';

export default function Page() {
  const shotSizes = [
    'Establishing shot',
    'Wide shot',
    'Medium wide shot',
    'Medium shot',
    'Medium close-up',
    'Close-up',
    'Extreme close-up',
  ];

  const cameraAngles = [
    'Eye level',
    'Seen from the side',
    'Back of main subject visible in foreground',
    'Looking slightly upward at the subject',
    'Looking slightly downward on the scene',
    'Three-quarter view',
    'Front-facing composition',
  ];

  const cameraMotions = [
    'Static tripod shot',
    'Slow dolly forward',
    'Slow push in',
    'Gentle handheld documentary movement',
    'Locked-off shot',
    'Slow lateral slide',
    'Smooth tracking shot with steadicam feel',
    'Tracking alongside the subject with steadicam feel',
    'Tracking behind the subject with steadicam feel',
  ];

  const motionDirections = [
    'Subjects move across the frame left to right',
    'Subjects move across the frame right to left',
    'Subjects walk toward the camera',
    'Subjects walk away from the camera',
    'Subjects pass by the camera in the foreground',
    'Mixed movement in different directions',
    'Subjects are seated and mostly still',
  ];

  const compositionStyles = [
    'Centered symmetrical composition',
    'Off-center composition',
    'Rule of thirds composition',
    'Subjects positioned on left side of frame',
    'Subjects positioned on right side of frame',
    'Asymmetrical environmental composition',
    'Diagonal movement through the frame',
  ];

  const frameBalanceOptions = [
    'Balanced frame',
    'Foreground object on left side of frame',
    'Foreground object on right side of frame',
    'Environment dominating right side of frame',
    'Environment dominating left side of frame',
    'Open space on one side of the frame',
  ];

  const subjectOrientationOptions = [
    'Facing camera',
    'Facing away from camera',
    'Side profile',
    'Three-quarter turn',
    'Mixed orientations',
  ];

  const timelapseOptions = ['No', 'Yes – timelapse'];

  const depthOptions = [
    'Deep focus everything sharp',
    'Moderate depth of field',
    'Shallow depth of field with background blur',
    'Strong cinematic background blur',
    'Documentary style deep focus',
  ];

  const colorOptions = [
    'Natural neutral colors',
    'High contrast vibrant colors',
    'Rich saturated cinematic colors',
    'Soft pastel color palette',
    'Cool modern tech color grading',
    'Warm golden cinematic tones',
  ];

  const lightingOptions = [
    'Soft natural daylight',
    'Bright natural daylight',
    'Soft diffused indoor lighting',
    'Clean modern office lighting',
    'Warm cinematic lighting',
    'Neutral realistic lighting',
  ];

  const styleOptions = [
    'Cinematic documentary stock footage, ultra realistic, 4k',
    'Corporate stock footage, realistic, 4k',
    'Natural documentary realism, subtle cinematic depth, 4k',
    'Premium commercial realism, clean and modern, 4k',
    'Editorial documentary style, realistic human behaviour, 4k',
  ];

  const [environment, setEnvironment] = useState('');
  const [subjects, setSubjects] = useState('');
  const [diversity, setDiversity] = useState('');
  const [action, setAction] = useState('');
  const [propsText, setPropsText] = useState('');
  const [architecture, setArchitecture] = useState('');
  const [shotSize, setShotSize] = useState('Wide shot');
  const [cameraAngle, setCameraAngle] = useState('Seen from the side');
  const [cameraPosition, setCameraPosition] = useState('');
  const [compositionStyle, setCompositionStyle] = useState('Off-center composition');
  const [frameBalance, setFrameBalance] = useState('Balanced frame');
  const [subjectOrientation, setSubjectOrientation] = useState('Mixed orientations');
  const [motionDirection, setMotionDirection] = useState('Mixed movement in different directions');
  const [foreground, setForeground] = useState('');
  const [midground, setMidground] = useState('');
  const [background, setBackground] = useState('');
  const [cameraMotion, setCameraMotion] = useState('Static tripod shot');
  const [timelapse, setTimelapse] = useState('No');
  const [depthStyle, setDepthStyle] = useState('Moderate depth of field');
  const [colorStyle, setColorStyle] = useState('Natural neutral colors');
  const [lighting, setLighting] = useState('Soft natural daylight');
  const [style, setStyle] = useState('Cinematic documentary stock footage, ultra realistic, 4k');
  const [negativePrompt, setNegativePrompt] = useState(
    'straight-on centered composition, symmetrical hero shot, homogeneous faces, dated environment'
  );

  const generatedPrompt = useMemo(() => {
    const parts = [
      environment,
      action,
      [subjects, diversity].filter(Boolean).join(', '),
      propsText,
      architecture,
      shotSize.toLowerCase(),
      cameraAngle.toLowerCase(),
      compositionStyle,
      frameBalance,
      cameraPosition ? `camera view: ${cameraPosition}` : '',
      subjectOrientation ? `subject orientation: ${subjectOrientation.toLowerCase()}` : '',
      motionDirection ? `movement: ${motionDirection.toLowerCase()}` : '',
      foreground ? `foreground: ${foreground}` : '',
      midground ? `midground: ${midground}` : '',
      background ? `background: ${background}` : '',
      cameraMotion,
      depthStyle,
      colorStyle,
      lighting,
      style,
      timelapse === 'Yes – timelapse' ? 'timelapse capture of the scene' : '',
    ];

    return parts.filter(Boolean).join(', ');
  }, [
    environment,
    action,
    subjects,
    diversity,
    propsText,
    architecture,
    shotSize,
    cameraAngle,
    compositionStyle,
    frameBalance,
    cameraPosition,
    subjectOrientation,
    motionDirection,
    foreground,
    midground,
    background,
    cameraMotion,
    depthStyle,
    colorStyle,
    lighting,
    style,
    timelapse,
  ]);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  const resetDefaults = () => {
    setEnvironment('');
    setSubjects('');
    setDiversity('');
    setAction('');
    setPropsText('');
    setArchitecture('');
    setShotSize('Wide shot');
    setCameraAngle('Seen from the side');
    setCameraPosition('');
    setCompositionStyle('Off-center composition');
    setFrameBalance('Balanced frame');
    setSubjectOrientation('Mixed orientations');
    setMotionDirection('Mixed movement in different directions');
    setForeground('');
    setMidground('');
    setBackground('');
    setCameraMotion('Static tripod shot');
    setTimelapse('No');
    setDepthStyle('Moderate depth of field');
    setColorStyle('Natural neutral colors');
    setLighting('Soft natural daylight');
    setStyle('Cinematic documentary stock footage, ultra realistic, 4k');
    setNegativePrompt(
      'straight-on centered composition, symmetrical hero shot, homogeneous faces, dated environment'
    );
  };

  const Section = ({
    title,
    subtitle,
    children,
  }: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
  }) => (
    <div style={sectionStyle}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
        <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: 14 }}>{subtitle}</p>
      </div>
      <div style={gridStyle}>{children}</div>
    </div>
  );

  const Field = ({
    label,
    children,
    fullWidth = false,
  }: {
    label: string;
    children: React.ReactNode;
    fullWidth?: boolean;
  }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: fullWidth ? '1 / -1' : undefined }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>{label}</label>
      {children}
    </div>
  );

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 32 }}>Kling Prompt Builder</h1>
            <p style={{ marginTop: 8, color: '#64748b' }}>
              Build Kling-friendly prompts using visual composition language instead of film jargon.
            </p>
          </div>

          <Section
            title="Environment"
            subtitle="Describe the place, physical setting, and objects in the scene."
          >
            <Field label="Environment / Location">
              <input style={inputStyle} value={environment} onChange={(e) => setEnvironment(e.target.value)} />
              <small style={helpStyle}>Example: busy Singapore construction site at ground level</small>
            </Field>

            <Field label="Architecture / Setting">
              <input style={inputStyle} value={architecture} onChange={(e) => setArchitecture(e.target.value)} />
              <small style={helpStyle}>Example: unfinished concrete structure, cranes, scaffolding</small>
            </Field>

            <Field label="Props / Details" fullWidth>
              <input style={inputStyle} value={propsText} onChange={(e) => setPropsText(e.target.value)} />
              <small style={helpStyle}>Example: safety helmets, tablets, tools, ID cards</small>
            </Field>
          </Section>

          <Section
            title="People"
            subtitle="Describe who is in the scene, their diversity, behavior, and orientation."
          >
            <Field label="Subjects">
              <input style={inputStyle} value={subjects} onChange={(e) => setSubjects(e.target.value)} />
              <small style={helpStyle}>Example: construction supervisor and a group of workers</small>
            </Field>

            <Field label="Subject Orientation">
              <select style={inputStyle} value={subjectOrientation} onChange={(e) => setSubjectOrientation(e.target.value)}>
                {subjectOrientationOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Diversity" fullWidth>
              <input style={inputStyle} value={diversity} onChange={(e) => setDiversity(e.target.value)} />
              <small style={helpStyle}>Example: multicultural Asian subjects including Chinese, Malay, Indian, Thai, Vietnamese and Filipino people with varied skin tones and facial features</small>
            </Field>

            <Field label="Action" fullWidth>
              <input style={inputStyle} value={action} onChange={(e) => setAction(e.target.value)} />
              <small style={helpStyle}>Example: supervisor checking workers identities using a tablet</small>
            </Field>
          </Section>

          <Section
            title="Camera & Composition"
            subtitle="Control framing, movement, and what appears in the foreground, midground, and background."
          >
            <Field label="Shot Size">
              <select style={inputStyle} value={shotSize} onChange={(e) => setShotSize(e.target.value)}>
                {shotSizes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Camera Angle">
              <select style={inputStyle} value={cameraAngle} onChange={(e) => setCameraAngle(e.target.value)}>
                {cameraAngles.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Composition Style">
              <select style={inputStyle} value={compositionStyle} onChange={(e) => setCompositionStyle(e.target.value)}>
                {compositionStyles.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Frame Balance">
              <select style={inputStyle} value={frameBalance} onChange={(e) => setFrameBalance(e.target.value)}>
                {frameBalanceOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Camera Motion">
              <select style={inputStyle} value={cameraMotion} onChange={(e) => setCameraMotion(e.target.value)}>
                {cameraMotions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Motion Direction">
              <select style={inputStyle} value={motionDirection} onChange={(e) => setMotionDirection(e.target.value)}>
                {motionDirections.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Camera Position / View Description" fullWidth>
              <input style={inputStyle} value={cameraPosition} onChange={(e) => setCameraPosition(e.target.value)} />
              <small style={helpStyle}>Example: the back of the supervisor is visible in the foreground while workers face him</small>
            </Field>

            <Field label="Foreground Composition">
              <input style={inputStyle} value={foreground} onChange={(e) => setForeground(e.target.value)} />
            </Field>

            <Field label="Midground Composition">
              <input style={inputStyle} value={midground} onChange={(e) => setMidground(e.target.value)} />
            </Field>

            <Field label="Background Composition" fullWidth>
              <input style={inputStyle} value={background} onChange={(e) => setBackground(e.target.value)} />
            </Field>
          </Section>

          <Section
            title="Look & Feel"
            subtitle="Shape the visual mood, color, contrast, depth, and overall finish."
          >
            <Field label="Timelapse">
              <select style={inputStyle} value={timelapse} onChange={(e) => setTimelapse(e.target.value)}>
                {timelapseOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Depth of Field">
              <select style={inputStyle} value={depthStyle} onChange={(e) => setDepthStyle(e.target.value)}>
                {depthOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Color / Contrast Style">
              <select style={inputStyle} value={colorStyle} onChange={(e) => setColorStyle(e.target.value)}>
                {colorOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Lighting">
              <select style={inputStyle} value={lighting} onChange={(e) => setLighting(e.target.value)}>
                {lightingOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Style" fullWidth>
              <select style={inputStyle} value={style} onChange={(e) => setStyle(e.target.value)}>
                {styleOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </Field>
          </Section>

          <Section
            title="Output"
            subtitle="Review and copy your final prompt settings."
          >
            <Field label="Negative Prompt" fullWidth>
              <textarea
                style={{ ...inputStyle, minHeight: 100, resize: 'vertical' as const }}
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </Field>

            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={primaryButtonStyle} onClick={() => copyText(generatedPrompt)}>
                Copy Prompt
              </button>
              <button style={secondaryButtonStyle} onClick={() => copyText(negativePrompt)}>
                Copy Negative Prompt
              </button>
              <button style={secondaryButtonStyle} onClick={resetDefaults}>
                Reset
              </button>
            </div>
          </Section>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={sectionStyle}>
            <h2 style={{ marginTop: 0, fontSize: 18 }}>Generated Prompt</h2>
            <div style={darkBoxStyle}>{generatedPrompt || 'Your prompt will appear here.'}</div>
          </div>

          <div style={sectionStyle}>
            <h2 style={{ marginTop: 0, fontSize: 18 }}>Negative Prompt</h2>
            <div style={lightBoxStyle}>{negativePrompt}</div>
          </div>

          <div style={sectionStyle}>
            <h2 style={{ marginTop: 0, fontSize: 18 }}>How to Use</h2>
            <div style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>
              <p>Use visual frame descriptions instead of relying only on camera jargon.</p>
              <p>Motion direction plus foreground, midground and background usually gives Kling much better composition control.</p>
              <p>Use composition style and frame balance to avoid centered, repetitive framing.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: '#f8fafc',
  padding: '24px',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: '1.2fr 0.8fr',
};

const sectionStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '20px',
  padding: '20px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #cbd5e1',
  borderRadius: '12px',
  fontSize: '14px',
  boxSizing: 'border-box',
};

const helpStyle: React.CSSProperties = {
  color: '#64748b',
  fontSize: '12px',
};

const darkBoxStyle: React.CSSProperties = {
  background: '#0f172a',
  color: '#f8fafc',
  borderRadius: '16px',
  padding: '16px',
  fontSize: '14px',
  lineHeight: 1.7,
  whiteSpace: 'pre-wrap',
};

const lightBoxStyle: React.CSSProperties = {
  background: '#f1f5f9',
  color: '#334155',
  borderRadius: '16px',
  padding: '16px',
  fontSize: '14px',
  lineHeight: 1.7,
  whiteSpace: 'pre-wrap',
};

const primaryButtonStyle: React.CSSProperties = {
  background: '#0f172a',
  color: '#ffffff',
  border: 'none',
  borderRadius: '12px',
  padding: '12px 16px',
  cursor: 'pointer',
  fontSize: '14px',
};

const secondaryButtonStyle: React.CSSProperties = {
  background: '#e2e8f0',
  color: '#0f172a',
  border: 'none',
  borderRadius: '12px',
  padding: '12px 16px',
  cursor: 'pointer',
  fontSize: '14px',
};