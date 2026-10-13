import pressBrake from '@/assets/press-brake.jpg';
import { machines, materialCapacities, trustBadges } from '@/data/content';
import type { Machine, MaterialCapacity } from '@/types/content';
import { PhotoFrame } from '@/components/ui/PhotoFrame';
import { Section, SectionHeading } from '@/components/ui/Section';
import { SpecTable, type SpecColumn } from '@/components/ui/SpecTable';

const machineColumns: SpecColumn<Machine>[] = [
  { header: 'Machine', render: (m) => m.machine },
  { header: 'Model', render: (m) => m.model, mono: true },
  { header: 'Key Spec', render: (m) => m.keySpec, mono: true },
];

const materialColumns: SpecColumn<MaterialCapacity>[] = [
  { header: 'Material', render: (m) => m.material },
  { header: 'Thickness Range', render: (m) => m.thickness, mono: true },
  { header: 'Process', render: (m) => m.process },
];

export function Capability() {
  return (
    <Section id="capability">
      <SectionHeading
        eyebrow="On The Floor"
        title="Machine capability"
        description="The equipment behind the quote — so you know exactly what your job runs on."
      />

      <div className="mb-9 grid grid-cols-2 items-start gap-12 max-[860px]:grid-cols-1">
        <SpecTable
          caption="Machines on the shop floor"
          columns={machineColumns}
          rows={machines}
          getRowKey={(m) => m.machine}
        />
        <PhotoFrame
          src={pressBrake}
          alt="EM CNC PBE 2031 press brake on the Purnima Industries shop floor"
          caption={['EM CNC PBE 2031', 'Press Brake']}
        />
      </div>

      <h3 className="mb-5 text-[1.1rem] tracking-normal normal-case">
        Cutting capacity by material
      </h3>
      <SpecTable
        caption="Laser cutting thickness range by material"
        columns={materialColumns}
        rows={materialCapacities}
        getRowKey={(m) => m.material}
        className="mb-9"
      />

      <ul
        aria-label="Certifications and specialities"
        className="m-0 mt-9 flex list-none flex-wrap gap-3.5 p-0"
      >
        {trustBadges.map((badge) => (
          <li
            key={badge}
            className="flex items-center gap-2 border border-line bg-bg px-4 py-2.5 font-mono text-[0.86rem] group-[.alt]/section:bg-surface-2 before:inline-block before:size-[7px] before:bg-tick before:content-['']"
          >
            {badge}
          </li>
        ))}
      </ul>
    </Section>
  );
}
