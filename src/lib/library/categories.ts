// The fixed Trailhead Library category set, matching the app's post_category
// enum. The marketing site reads these off published posts; it never writes a
// category, so this is a display map only. Kept in step with the app copy in
// wildwanderers-app/src/lib/library/categories.ts.

export const POST_CATEGORIES = [
  { value: "podcasts", label: "Podcasts" },
  { value: "fitness_updates", label: "Fitness updates" },
  { value: "assessment_breakdowns", label: "Assessment breakdowns" },
  { value: "child_development_and_play", label: "Child development and play" },
  { value: "camping_and_the_outdoors", label: "Camping and the outdoors" },
  { value: "research_and_field_notes", label: "Research and field notes" },
] as const;

const LABEL = new Map<string, string>(POST_CATEGORIES.map((c) => [c.value, c.label]));

export function categoryLabel(value: string): string {
  return LABEL.get(value) ?? value;
}
